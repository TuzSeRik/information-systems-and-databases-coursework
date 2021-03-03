package dev.tuzserik.backend.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.util.Collection;
import java.util.ArrayList;
import java.util.UUID;
import dev.tuzserik.backend.model.Transaction;

@Data
public class TransactionListResponse {
    private Collection<TransactionSummary> summaries = new ArrayList<>();

    @AllArgsConstructor @Data
    static class TransactionSummary {
        private UUID id;
        private String cardName;
        private String previousOwnerLogin;
        private String currentOwnerLogin;
        private String timestamp;
        private String status;
    }

    public TransactionListResponse(Collection<Transaction> transactions) {
        for (Transaction transaction : transactions) {
            summaries.add(new TransactionSummary(transaction.getId(),
                                transaction.getCard().getName(),
                                transaction.getPreviousOwner().getLogin(),
                                transaction.getCurrentOwner().getLogin(),
                                transaction.getTimestamp().toString(),
                                transaction.getStatus()
            ));
        }
    }
}
