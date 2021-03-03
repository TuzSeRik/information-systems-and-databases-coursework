package dev.tuzserik.backend.requests;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor @Data
public class GenerateCodesRequest {
    private String type;
    private Integer number;
}
