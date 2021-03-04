package dev.tuzserik.backend.services;

import dev.tuzserik.backend.model.Card;
import dev.tuzserik.backend.repositories.CardRepository;
import dev.tuzserik.backend.repositories.ServiceRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.ZonedDateTime;
import java.util.Collection;
import java.util.UUID;
import dev.tuzserik.backend.repositories.ContractRepository;
import dev.tuzserik.backend.model.Contract;
import dev.tuzserik.backend.model.User;

@AllArgsConstructor @Service
public class ContractService {
    private final ContractRepository contractRepository;
    private final ServiceRepository serviceRepository;
    private final CardRepository cardRepository;


    public Contract findOne(UUID id) {
        if (contractRepository.findById(id).isPresent())
            return contractRepository.findById(id).get();
        return new Contract();
    }

    public Collection<Contract> getManagerContracts(User user) {
        return contractRepository.findAll();
    }

    public void markContract(Contract contract, String status) {
        contract.setStatus(status);

        if (contract.getStatus().equals("CANCELED"))
            contract.getCard().increaseAccountValue(contract.getService().getPrice());

    }

    public Card createContract(User user, UUID serviceId, UUID cardId) {
        contractRepository.save(new Contract(
                UUID.randomUUID(),
                serviceRepository.getOne(serviceId),
                user,
                new User(),
                cardRepository.getOne(cardId),
                ZonedDateTime.now(),
                ZonedDateTime.now(),
                "PENDING"
        ));

        return cardRepository.getOne(cardId);
    }
}
