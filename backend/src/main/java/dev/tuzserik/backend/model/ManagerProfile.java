package dev.tuzserik.backend.model;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;
import javax.persistence.*;
import java.util.UUID;

@AllArgsConstructor @NoArgsConstructor @Data @Entity @Table(name = "MANAGER_PROFILES")
public class ManagerProfile {
    @Id @GeneratedValue
    private UUID id;
    @OneToOne
    private User relatedUser;
    private String name;
    private String picLink;
    private int accessLevel;
}
