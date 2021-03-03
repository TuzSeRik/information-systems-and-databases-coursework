package dev.tuzserik.backend.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import dev.tuzserik.backend.repositories.RoleRepository;
import dev.tuzserik.backend.repositories.InvitationCodeRepository;
import dev.tuzserik.backend.model.User;
import dev.tuzserik.backend.model.InvitationCode;
import java.util.Collection;
import java.util.ArrayList;
import java.util.UUID;

@AllArgsConstructor @Service
public class AdministratorService {
    private final RoleRepository roleRepository;
    private final InvitationCodeRepository invitationCodeRepository;

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

    public Collection<InvitationCode> getCodes() {
        return invitationCodeRepository.findAll();
    }

    public Collection<InvitationCode> generateCodes(String type, int number) {
        ArrayList<InvitationCode> list = new ArrayList<>();

        for (int i = 0; i < number; i++) {
            list.add(new InvitationCode(
                    new UUID(0, 0),
                    UUID.randomUUID(),
                    type));
        }

        invitationCodeRepository.saveAll(list);
        return list;
    }
}
