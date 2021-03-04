package dev.tuzserik.backend.requests;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.util.UUID;

@AllArgsConstructor @Data
public class ServiceCreationRequest {
    private UUID archetypeId;
    private String name;
    private int price;
}
