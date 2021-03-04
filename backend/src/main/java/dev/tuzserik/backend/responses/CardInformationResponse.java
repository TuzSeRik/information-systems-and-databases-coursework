package dev.tuzserik.backend.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.util.UUID;

@AllArgsConstructor @Data
public class CardInformationResponse {
    private UUID id;
    private UUID cardArchetypeId;
    private String name;
    private UUID ownerId;
    private int balance;
}
