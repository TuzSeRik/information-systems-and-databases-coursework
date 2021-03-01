package dev.tuzserik.backend.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.UUID;
import dev.tuzserik.backend.repositories.InvitationCodeRepository;
import dev.tuzserik.backend.model.InvitationCode;

@AllArgsConstructor @Service
public class InvitationCodeService {
    private final InvitationCodeRepository invitationCodeRepository;

    public String getUserLevel(UUID code) {
        InvitationCode invitationCode = invitationCodeRepository.findByCode(code);

        if (invitationCode != null)
            return invitationCode.getLevel();
        else
            return "CLIENT";
    }
}
