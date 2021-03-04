package dev.tuzserik.backend.model;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;
import javax.persistence.*;
import java.util.UUID;

@AllArgsConstructor @NoArgsConstructor @Data @Entity @Table(name = "CARD_ARCHETYPES")
public class CardArchetype {
    @Id @GeneratedValue
    private UUID id;
    private String name;
    @ManyToOne
    private User issuer;
    private int value;
}
