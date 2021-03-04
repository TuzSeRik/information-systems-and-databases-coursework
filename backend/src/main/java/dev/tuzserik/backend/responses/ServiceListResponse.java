package dev.tuzserik.backend.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.util.Collection;
import java.util.ArrayList;
import java.util.UUID;
import dev.tuzserik.backend.model.Service;

@Data
public class ServiceListResponse {
    private Collection<ServiceSummary> summaries = new ArrayList<>();

    @AllArgsConstructor @Data
    static class ServiceSummary {
        private UUID id;
        private UUID cardArchetypeId;
        private String name;
        private int price;
    }

    public ServiceListResponse(Collection<Service> services) {
        for (Service service : services) {
            summaries.add(new ServiceSummary(
                    service.getId(),
                    service.getCardArchetype().getId(),
                    service.getName(),
                    service.getPrice())
            );
        }
    }
}
