package dev.tuzserik.backend.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.util.Collection;
import java.util.ArrayList;
import java.util.UUID;
import dev.tuzserik.backend.model.CardArchetype;

@Data
public
class CardArchetypeListResponse {
    private Collection<CardArchetypeSummary> summaries = new ArrayList<>();

    @AllArgsConstructor @Data
    static class CardArchetypeSummary {
        private UUID id;
        private String name;
        private UUID issuer;
        private int value;
    }

    public CardArchetypeListResponse(Collection<CardArchetype> archetypes) {
        for (CardArchetype archetype : archetypes) {
            summaries.add(new CardArchetypeSummary(
                    archetype.getId(),
                    archetype.getName(),
                    archetype.getIssuer().getId(),
                    archetype.getValue())
            );
        }
    }
}
