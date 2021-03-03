package dev.tuzserik.backend.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.Collection;
import java.util.UUID;
import dev.tuzserik.backend.repositories.InvitationCodeRepository;
import dev.tuzserik.backend.model.InvitationCode;

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
