package dev.tuzserik.backend.model;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;
import javax.persistence.*;
import java.util.UUID;

@AllArgsConstructor @NoArgsConstructor @Data @Entity @Table(name = "CLIENT_PROFILES")
public class ClientProfile {
    @Id @GeneratedValue
    private UUID id;
    @OneToOne
    private User relatedUser;
    private String givenName;
    private String familyName;
    private String picLink;
}
