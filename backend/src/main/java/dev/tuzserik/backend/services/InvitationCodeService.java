package dev.tuzserik.backend.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.UUID;
import java.util.List;
import java.util.stream.Collectors;
import dev.tuzserik.backend.repositories.InvitationCodeRepository;
import dev.tuzserik.backend.model.InvitationCode;
import dev.tuzserik.backend.model.User;
import dev.tuzserik.backend.model.Role;

@AllArgsConstructor @Service
public class InvitationCodeService {
    private final InvitationCodeRepository invitationCodeRepository;

    public String getUserLevelWithInvalidation(UUID code) {
        InvitationCode invitationCode = invitationCodeRepository.findByCode(code);

        if (invitationCode != null) {
            invitationCodeRepository.delete(invitationCode);
            return invitationCode.getLevel();
        }
        else
            return "CLIENT";
    }

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
}
