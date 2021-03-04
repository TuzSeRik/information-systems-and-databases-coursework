package dev.tuzserik.backend.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.Collection;
import java.util.UUID;
import dev.tuzserik.backend.repositories.CardArchetypeRepository;
import dev.tuzserik.backend.repositories.CardRepository;
import dev.tuzserik.backend.repositories.UserRepository;
import dev.tuzserik.backend.model.Card;
import dev.tuzserik.backend.model.User;

@AllArgsConstructor @Service
public class CardService {
    private final CardRepository cardRepository;
    private final CardArchetypeRepository cardArchetypeRepository;
    private final UserRepository userRepository;

    public Collection<Card> findAllCardsForUser(User user) {
        return cardRepository.findAllByOwner(user);
    }

    public Card addCard(UUID archetypeId, String name, UUID userId, int balance) {
        return cardRepository.save(
                new Card(
                        UUID.randomUUID(),
                        cardArchetypeRepository.getOne(archetypeId),
                        name,
                        userRepository.getOne(userId),
                        balance
                )
        );
    }
}
