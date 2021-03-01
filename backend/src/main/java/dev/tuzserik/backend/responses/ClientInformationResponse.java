package dev.tuzserik.backend.responses;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor @Data
public class ClientInformationResponse {
    private String givenName;
    private String familyName;
    private String picLink;
}
