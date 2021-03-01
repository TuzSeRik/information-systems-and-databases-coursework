package dev.tuzserik.backend.responses;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor @Data
public class IssuerInformationResponse {
    private String givenName;
    private String nickname;
    private String familyName;
    private String famousFor;
    private String picLink;
}
