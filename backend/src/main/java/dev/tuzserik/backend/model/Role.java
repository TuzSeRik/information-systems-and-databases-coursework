package dev.tuzserik.backend.model;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;
import javax.persistence.*;
import java.util.UUID;
import java.util.Collection;

@AllArgsConstructor @NoArgsConstructor @Data @Entity @Table(name = "ROLES")
public class Role {
    @Id @GeneratedValue
    private UUID id;
    @Column(unique = true, nullable = false)
    private String name;
    @ManyToMany(mappedBy = "roles")
    private Collection<User> users;
}
