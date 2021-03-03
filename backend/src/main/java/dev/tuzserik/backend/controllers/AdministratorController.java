package dev.tuzserik.backend.controllers;

import dev.tuzserik.backend.requests.GenerateCodesRequest;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import dev.tuzserik.backend.responses.InvitationCodeListResponse;
import dev.tuzserik.backend.services.AuthorisationService;
import dev.tuzserik.backend.services.InvitationCodeService;
import dev.tuzserik.backend.services.AccessService;
import dev.tuzserik.backend.model.User;

@AllArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class AdministratorController {
    private final AuthorisationService authorisationService;
    private final InvitationCodeService invitationCodeService;
    private final AccessService accessService;

    @GetMapping("/api/codes")
    ResponseEntity<InvitationCodeListResponse> getAllCodes() {
        String login = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = authorisationService.findUserByLogin(login);

        if (accessService.isAdministrator(user))
            return new ResponseEntity<>(
                    new InvitationCodeListResponse(invitationCodeService.getCodes()), HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }

    @PostMapping("/api/codes")
    ResponseEntity<InvitationCodeListResponse> getNewCodes(@RequestBody GenerateCodesRequest request) {
        String login = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = authorisationService.findUserByLogin(login);

        if (accessService.isAdministrator(user))
            return new ResponseEntity<>(
                    new InvitationCodeListResponse(invitationCodeService.generateCodes(request.getType(),
                                                                                        request.getNumber())),
                            HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }
}
