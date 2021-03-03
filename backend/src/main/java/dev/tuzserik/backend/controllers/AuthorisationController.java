package dev.tuzserik.backend.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import dev.tuzserik.backend.services.AuthorisationService;
import dev.tuzserik.backend.services.InvitationCodeService;
import dev.tuzserik.backend.model.*;
import dev.tuzserik.backend.responses.*;

@AllArgsConstructor @RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class AuthorisationController {
    private final AuthorisationService authorisationService;
    private final InvitationCodeService invitationCodeService;

    @GetMapping("/api/user")
    ResponseEntity<UserInformationResponse> getUser() {
        String login = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = authorisationService.findUserByLogin(login);

        if (user != null) {
            return new ResponseEntity<>(new UserInformationResponse(
                    user.getLogin(), invitationCodeService.getUserLevel(user)),
                    HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/api/client")
    ResponseEntity<ClientInformationResponse> getClient() {
        String login = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = authorisationService.findUserByLogin(login);

        if (user != null) {
            ClientProfile client = authorisationService.findClientByUser(user);

            if (client != null) {
                return new ResponseEntity<>(
                        new ClientInformationResponse(
                                client.getGivenName(), client.getFamilyName(), client.getPicLink()),
                        HttpStatus.OK);
            }
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/api/issuer")
    ResponseEntity<IssuerInformationResponse> getIssuer() {
        String login = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = authorisationService.findUserByLogin(login);

        if (user != null) {
            IssuerProfile issuer = authorisationService.findIssuerByUser(user);

            if (issuer != null) {
                return new ResponseEntity<>(new IssuerInformationResponse(
                        issuer.getGivenName(), issuer.getNickname(), issuer.getFamilyName(),
                        issuer.getFamousFor(), issuer.getPicLink()),
                        HttpStatus.OK);
            }
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/api/manager")
    ResponseEntity<ManagerInformationResponse> getManager() {
        String login = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = authorisationService.findUserByLogin(login);

        if (user != null) {
            ManagerProfile manager = authorisationService.findManagerByUser(user);

            if (manager != null) {
                return new ResponseEntity<>(new ManagerInformationResponse(
                        manager.getName(), manager.getPicLink()),
                        HttpStatus.OK);
            }
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
