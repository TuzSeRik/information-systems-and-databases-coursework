package dev.tuzserik.backend.model;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;
import javax.persistence.*;
import java.util.UUID;

@AllArgsConstructor @NoArgsConstructor @Data @Entity @Table(name = "SERVICES")
public class Service {
    @Id @GeneratedValue
    private UUID id;
    @ManyToOne
    private CardArchetype cardArchetype;
    private String name;
    private int price;
}
