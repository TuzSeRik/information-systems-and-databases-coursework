package dev.tuzserik.backend.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import dev.tuzserik.backend.responses.InvitationCodeListResponse;
import dev.tuzserik.backend.services.AdministratorService;
import dev.tuzserik.backend.services.AuthorisationService;
import dev.tuzserik.backend.model.User;

@AllArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class AdministratorController {
    private final AuthorisationService authorisationService;
    private final AdministratorService administratorService;

    @GetMapping("/api/codes")
    ResponseEntity<InvitationCodeListResponse> getAllCodes() {
        String login = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = authorisationService.findUserByLogin(login);

        if (administratorService.isAdministrator(user))
            return new ResponseEntity<>(
                    new InvitationCodeListResponse(administratorService.getCodes()), HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }

    @GetMapping("/api/codes/generate")
    ResponseEntity<InvitationCodeListResponse> getNewCodes(@RequestParam String type,
                                                           @RequestParam Integer number) {
        String login = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = authorisationService.findUserByLogin(login);

        if (administratorService.isAdministrator(user))
            return new ResponseEntity<>(
                    new InvitationCodeListResponse(administratorService.generateCodes(type, number)),
                            HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }
}
