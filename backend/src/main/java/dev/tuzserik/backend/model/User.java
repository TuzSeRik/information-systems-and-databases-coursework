package dev.tuzserik.backend.model;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;
import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;
import java.util.Collection;
import java.util.HashSet;
import java.util.UUID;

@AllArgsConstructor @NoArgsConstructor @Data @Entity @Table(name = "USERS")
public class User {
    @Id @GeneratedValue
    private UUID id;
    @Column(unique = true, nullable = false)
    private String login;
    @Column(nullable = false) @JsonIgnore
    private String password;
    @Column(unique = true)
    private UUID invitationCode;
    @ManyToMany()
    private Collection<Role> roles = new HashSet<>();

    public User setRoles(Role role) {
        this.roles.add(role);
        return this;
    }
}
