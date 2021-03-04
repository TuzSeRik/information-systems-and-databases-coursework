package dev.tuzserik.backend.requests;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.util.UUID;

@AllArgsConstructor @Data
public class CardArchetypeCreationRequest {
    private String name;
    private UUID issuerId;
    private int value;
}
