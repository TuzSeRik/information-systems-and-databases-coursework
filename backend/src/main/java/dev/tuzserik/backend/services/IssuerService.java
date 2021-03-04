package dev.tuzserik.backend.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.Collection;
import java.util.UUID;
import dev.tuzserik.backend.repositories.CardArchetypeRepository;
import dev.tuzserik.backend.repositories.ServiceRepository;
import dev.tuzserik.backend.repositories.UserRepository;
import dev.tuzserik.backend.model.CardArchetype;
import dev.tuzserik.backend.model.User;

@AllArgsConstructor @Service
public class IssuerService {
    private final CardArchetypeRepository cardArchetypeRepository;
    private final ServiceRepository serviceRepository;
    private final UserRepository userRepository;

    public Collection<CardArchetype> getAllIssuerArchetypes(User user) {
        return cardArchetypeRepository.findAllByIssuer(user);
    }

    public dev.tuzserik.backend.model.Service addService(UUID archetypeId, String name, int price) {
        return serviceRepository.save(
                new dev.tuzserik.backend.model.Service(
                        UUID.randomUUID(),
                        cardArchetypeRepository.getOne(archetypeId),
                        name,
                        price
                )
        );
    }

    public Collection<dev.tuzserik.backend.model.Service> findAllServicesForArchetypesOf(User user) {
        Collection<CardArchetype> issuerArchetypes = getAllIssuerArchetypes(user);
        return serviceRepository.findAllByCardArchetypeIn(issuerArchetypes);
    }

    public CardArchetype addCardArchetype(String name, UUID issuerId, int value) {
        return cardArchetypeRepository.save(
                new CardArchetype(
                        UUID.randomUUID(),
                        name,
                        userRepository.getOne(issuerId),
                        value
                )
        );
    }
}
