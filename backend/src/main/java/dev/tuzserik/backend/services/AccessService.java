package dev.tuzserik.backend.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.stream.Collectors;
import java.util.List;
import dev.tuzserik.backend.repositories.RoleRepository;
import dev.tuzserik.backend.model.User;
import dev.tuzserik.backend.model.Role;

@AllArgsConstructor @Service
public class AccessService {
    private final RoleRepository roleRepository;

    public String getUserLevel(User user) {
        List<String> rolesString = user.getRoles().stream().map(Role::getName).collect(Collectors.toList());

        if (rolesString.contains("ROLE_ADMINISTRATOR")) {
            return "ADMINISTRATOR";
        }

        if (rolesString.contains("ROLE_MANAGER")) {
            return "MANAGER";
        }

        if (rolesString.contains("ROLE_ISSUER")) {
            return "ISSUER";
        }

        if (rolesString.contains("ROLE_CLIENT")) {
            return "CLIENT";
        }

        return null;
    }

    public boolean isClient(User user) {
        return user.getRoles().contains(roleRepository.findByName("ROLE_CLIENT"));
    }

    public boolean isIssuer(User user) {
        return user.getRoles().contains(roleRepository.findByName("ROLE_ISSUER"));
    }

    public boolean isManager(User user) {
        return user.getRoles().contains(roleRepository.findByName("ROLE_MANAGER"));
    }

    public boolean isAdministrator(User user) {
        return user.getRoles().contains(roleRepository.findByName("ROLE_ADMINISTRATOR"));
    }
}
