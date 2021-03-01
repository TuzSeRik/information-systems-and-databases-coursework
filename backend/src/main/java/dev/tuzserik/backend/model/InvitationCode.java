package dev.tuzserik.backend.model;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;
import javax.persistence.*;
import java.util.UUID;

@AllArgsConstructor @NoArgsConstructor @Data @Entity @Table(name = "INVITATION_CODES")
public class InvitationCode {
    @Id @GeneratedValue
    private UUID id;
    private UUID code;
    private String level;
}
