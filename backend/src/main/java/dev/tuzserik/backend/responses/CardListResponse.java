package dev.tuzserik.backend.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.util.Collection;
import java.util.ArrayList;
import java.util.UUID;
import dev.tuzserik.backend.model.Card;

@Data
public
class CardListResponse {
    private Collection<CardSummary> summaries = new ArrayList<>();

    @AllArgsConstructor @Data
    static class CardSummary {
        private UUID id;
        private UUID cardArchetypeId;
        private String name;
        private UUID ownerId;
        private int balance;
    }

    public CardListResponse(Collection<Card> cards) {
        for (Card card : cards) {
            summaries.add(new CardSummary(
                    card.getId(),
                    card.getCardArchetype().getId(),
                    card.getName(),
                    card.getOwner().getId(),
                    card.getBalance()
            ));
        }
    }
}
