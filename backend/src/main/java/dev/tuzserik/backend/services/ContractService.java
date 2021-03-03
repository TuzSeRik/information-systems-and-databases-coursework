package dev.tuzserik.backend.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.Collection;
import java.util.UUID;
import dev.tuzserik.backend.repositories.ContractRepository;
import dev.tuzserik.backend.model.Contract;
import dev.tuzserik.backend.model.User;

@AllArgsConstructor @Service
public class ContractService {
    private final ContractRepository contractRepository;

    public Contract findOne(UUID id) {
        if (contractRepository.findById(id).isPresent())
            return contractRepository.findById(id).get();
        return new Contract();
    }

    public Collection<Contract> getManagerContracts(User user) {
        return contractRepository.findAllByManager(user);
    }

    public void markContract(Contract contract, String status) {
        contract.setStatus(status);

        if (contract.getStatus().equals("CANCELED"))
            contract.getCard().increaseAccountValue(contract.getService().getPrice());

    }
}
