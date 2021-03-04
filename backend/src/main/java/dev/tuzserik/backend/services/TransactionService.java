package dev.tuzserik.backend.services;


import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.time.ZonedDateTime;
import java.util.Collection;
import java.util.Optional;
import java.util.UUID;
import dev.tuzserik.backend.repositories.TransactionRepository;
import dev.tuzserik.backend.repositories.CardRepository;
import dev.tuzserik.backend.repositories.UserRepository;
import dev.tuzserik.backend.model.Transaction;
import dev.tuzserik.backend.model.Card;

@AllArgsConstructor @Service
public class TransactionService {
    private final TransactionRepository transactionRepository;
    private final CardRepository cardRepository;
    private final UserRepository userRepository;

    public Collection<Transaction> getPendingTransactions() {
        return transactionRepository.findAllByStatus("PENDING");
    }

    public Transaction markTransaction(UUID id, String status) {
        Optional<Transaction> transaction = transactionRepository.findById(id);

        if (transaction.isPresent()) {
            transaction.get().setStatus(status);

            if (transaction.get().getStatus().equals("CANCELED"))
                transaction.get().getCard().setOwner(transaction.get().getPreviousOwner());

            return transaction.get();
        }
        else
            return null;
    }

    public Card transferCard(UUID cardId, UUID ownerId, UUID newOwnerId) {
        cardRepository.save(
                cardRepository.getOne(cardId)
                                .setOwner(userRepository.getOne(newOwnerId)));

        transactionRepository.save(new Transaction(
                                        UUID.randomUUID(),
                                        cardRepository.getOne(cardId),
                                        userRepository.getOne(ownerId),
                                        userRepository.getOne(newOwnerId),
                                        ZonedDateTime.now(),
                                        "PENDING"

        ));

        return cardRepository.getOne(cardId);
    }
}
