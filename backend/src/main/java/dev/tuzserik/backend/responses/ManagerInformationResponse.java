package dev.tuzserik.backend.responses;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor @Data
public class ManagerInformationResponse {
    private String name;
    private String picLink;
}
