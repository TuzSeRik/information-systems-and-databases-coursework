package dev.tuzserik.backend.services;

import lombok.AllArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import dev.tuzserik.backend.repositories.*;
import dev.tuzserik.backend.model.*;

@AllArgsConstructor @Service
public class AuthorisationService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final ClientProfileRepository clientRepository;
    private final IssuerProfileRepository issuerRepository;
    private final ManagerProfileRepository managerRepository;

    public User findUserByLogin(String login) {
        return userRepository.findUserByLogin(login);
    }

    public ClientProfile findClientByUser(User user) {
        return clientRepository.findClientProfileByRelatedUser(user);
    }

    public IssuerProfile findIssuerByUser(User user) {
        return issuerRepository.findIssuerProfileByRelatedUser(user);
    }

    public ManagerProfile findManagerByUser(User user) {
        return managerRepository.findManagerProfileByRelatedUser(user);
    }

    public User saveUser(User user) {
        user.setRoles(roleRepository.findByName("ROLE_USER"));
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        return userRepository.save(user);
    }

    public ClientProfile saveClient(ClientProfile client) {
        client.getRelatedUser().getRoles().add(roleRepository.findByName("ROLE_CLIENT"));
        return clientRepository.save(client);
    }

    public IssuerProfile saveIssuer(IssuerProfile issuer) {
        issuer.getRelatedUser().getRoles().add(roleRepository.findByName("ROLE_ISSUER"));
        return issuerRepository.save(issuer);
    }

    public ManagerProfile saveManager(ManagerProfile manager) {
        manager.getRelatedUser().getRoles().add(roleRepository.findByName("ROLE_MANAGER"));
        return managerRepository.save(manager);
    }
}
