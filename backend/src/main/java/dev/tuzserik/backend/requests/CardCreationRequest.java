package dev.tuzserik.backend.requests;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.util.UUID;

@AllArgsConstructor @Data
public class CardCreationRequest {
    private UUID archetypeId;
    private String name;
    private UUID userId;
    private int balance;
}
