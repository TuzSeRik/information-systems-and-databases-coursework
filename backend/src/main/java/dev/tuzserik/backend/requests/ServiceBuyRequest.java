package dev.tuzserik.backend.requests;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.util.UUID;

@AllArgsConstructor @Data
public class ServiceBuyRequest {
    private UUID serviceId;
    private UUID cardId;
}
