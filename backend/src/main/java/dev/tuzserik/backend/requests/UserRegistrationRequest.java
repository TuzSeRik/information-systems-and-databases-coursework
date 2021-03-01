package dev.tuzserik.backend.requests;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.util.UUID;

@AllArgsConstructor @Data
public class UserRegistrationRequest {
    private String login;
    private String password;
    private UUID invitationCode;
}
