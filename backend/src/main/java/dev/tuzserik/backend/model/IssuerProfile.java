package dev.tuzserik.backend.model;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;
import javax.persistence.*;
import java.util.UUID;

@AllArgsConstructor @NoArgsConstructor @Data @Entity @Table(name = "ISSUER_PROFILES")
public class IssuerProfile {
    @Id @GeneratedValue
    private UUID id;
    @OneToOne
    private User relatedUser;
    private String givenName;
    private String nickname;
    private String familyName;
    private String famousFor;
    private String picLink;
}
