package dev.tuzserik.backend.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.util.UUID;

@AllArgsConstructor @Data
public class CardArchetypeInformationResponse {
    private UUID id;
    private String name;
    private UUID issuer;
    private int value;
}
