package dev.tuzserik.backend.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.Collection;
import java.util.Optional;
import java.util.UUID;
import dev.tuzserik.backend.repositories.TransactionRepository;
import dev.tuzserik.backend.model.Transaction;

@AllArgsConstructor @Service
public class TransactionService {
    private final TransactionRepository transactionRepository;

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
}
