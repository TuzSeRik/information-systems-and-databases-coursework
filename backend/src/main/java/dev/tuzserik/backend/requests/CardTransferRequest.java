package dev.tuzserik.backend.requests;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.util.UUID;

@AllArgsConstructor @Data
public class CardTransferRequest {
    private UUID cardId;
    private UUID ownerId;
    private UUID newOwnerId;
}
