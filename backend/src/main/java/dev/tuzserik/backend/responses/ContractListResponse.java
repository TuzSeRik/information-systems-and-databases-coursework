package dev.tuzserik.backend.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.util.Collection;
import java.util.ArrayList;
import java.util.UUID;
import dev.tuzserik.backend.model.Contract;

@Data
public class ContractListResponse {
    private Collection<ContractSummary> summaries = new ArrayList<>();

    @AllArgsConstructor @Data
    static class ContractSummary {
        private UUID id;
        private String serviceName;
        private String receiverLogin;
        private String cardName;
        private String status;
    }

    public ContractListResponse(Collection<Contract> contracts) {
        for (Contract contract : contracts) {
            summaries.add(new ContractSummary(contract.getId(), contract.getService().getName(),
                    contract.getServiceReceiver().getLogin(),
                    contract.getCard().getName(),
                    contract.getStatus())
            );
        }
    }
}
