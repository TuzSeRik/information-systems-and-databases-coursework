package dev.tuzserik.backend.model;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;
import javax.persistence.*;
import java.time.ZonedDateTime;
import java.util.UUID;

@AllArgsConstructor @NoArgsConstructor @Data @Entity @Table(name = "TRANSACTIONS")
public class Transaction {
    @Id @GeneratedValue
    private UUID id;
    @ManyToOne
    private Card card;
    @ManyToOne
    private User previousOwner;
    @ManyToOne
    private User currentOwner;
    private ZonedDateTime timestamp;
    private String status;
}
