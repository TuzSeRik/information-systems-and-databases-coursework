package dev.tuzserik.backend.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.util.UUID;

@AllArgsConstructor @Data
public class ServiceInformationResponse {
    private UUID id;
    private String name;
    private UUID issuerId;
    private int price;
}
