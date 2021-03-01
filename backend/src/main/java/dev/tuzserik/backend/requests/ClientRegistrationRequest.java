package dev.tuzserik.backend.requests;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor @Data
public class ClientRegistrationRequest {
    private String givenName;
    private String familyName;
    private String picLink;
}
