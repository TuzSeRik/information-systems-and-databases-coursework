package dev.tuzserik.backend.requests;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor @Data
public class ManagerRegistrationRequest {
    private String name;
    private String picLink;
}
