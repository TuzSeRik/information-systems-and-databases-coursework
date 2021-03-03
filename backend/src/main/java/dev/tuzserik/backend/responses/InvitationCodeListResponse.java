package dev.tuzserik.backend.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.util.Collection;
import dev.tuzserik.backend.model.InvitationCode;

@AllArgsConstructor @Data
public class InvitationCodeListResponse {
    private Collection<InvitationCode> codes;
}
