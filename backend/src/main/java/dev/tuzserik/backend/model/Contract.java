package dev.tuzserik.backend.model;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;
import javax.persistence.*;
import java.util.UUID;
import java.time.ZonedDateTime;

@AllArgsConstructor @NoArgsConstructor @Data @Entity @Table(name = "CONTRACTS")
public class Contract {
    @Id @GeneratedValue
    private UUID id;
    @ManyToOne
    private Service service;
    @ManyToOne
    private User serviceReceiver;
    @ManyToOne
    private User manager;
    @ManyToOne
    private Card card;
    private ZonedDateTime creationDate = ZonedDateTime.now();
    private ZonedDateTime resolveDate = ZonedDateTime.now();
    private String status;
}
