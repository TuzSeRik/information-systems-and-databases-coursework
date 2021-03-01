package dev.tuzserik.backend.requests;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor @Data
public class IssuerRegistrationRequest {
    private String givenName;
    private String nickname;
    private String familyName;
    private String famousFor;
    private String picLink;
}
