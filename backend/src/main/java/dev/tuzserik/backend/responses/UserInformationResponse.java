package dev.tuzserik.backend.responses;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor @Data
public class UserInformationResponse {
    private String login;
    private String type;
}
