package dev.tuzserik.backend.model;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;
import javax.persistence.*;
import java.util.UUID;

@AllArgsConstructor @NoArgsConstructor @Data @Entity @Table(name = "CARDS")
public class Card {
    @Id @GeneratedValue
    private UUID id;
    @ManyToOne
    private CardArchetype cardArchetype;
    private String name;
    @ManyToOne
    private User owner;
    private int balance;

    public void increaseAccountValue(int amount) {
        this.balance += amount;
    }
}
