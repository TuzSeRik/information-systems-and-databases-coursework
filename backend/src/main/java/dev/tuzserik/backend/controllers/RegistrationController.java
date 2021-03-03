package dev.tuzserik.backend.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import dev.tuzserik.backend.services.AuthorisationService;
import dev.tuzserik.backend.services.InvitationCodeService;
import dev.tuzserik.backend.model.*;
import dev.tuzserik.backend.requests.*;
import dev.tuzserik.backend.responses.*;

@AllArgsConstructor @RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class RegistrationController {
    private final AuthorisationService authorisationService;
    private final InvitationCodeService invitationCodeService;

    @PostMapping("/api/register/user")
    ResponseEntity<UserInformationResponse> registerUser(@RequestBody UserRegistrationRequest request) {
        User user = authorisationService.saveUser(new User()
                .setLogin(request.getLogin())
                .setPassword(request.getPassword())
                .setInvitationCode(request.getInvitationCode()));

        return new ResponseEntity<>(new UserInformationResponse(user.getLogin(),
                invitationCodeService.getUserLevelWithInvalidation(request.getInvitationCode())), HttpStatus.OK);
    }

    @PostMapping("/api/register/client")
    ResponseEntity<ClientInformationResponse> registerClient(@RequestBody ClientRegistrationRequest request) {
        String login = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = authorisationService.findUserByLogin(login);

        ClientProfile client = authorisationService.saveClient(new ClientProfile()
                .setRelatedUser(user)
                .setGivenName(request.getGivenName())
                .setFamilyName(request.getFamilyName())
                .setPicLink(request.getPicLink()));

        return new ResponseEntity<>(new ClientInformationResponse(
                client.getGivenName(), client.getFamilyName(), client.getPicLink()),
                HttpStatus.OK);
    }

    @PostMapping("/api/register/issuer")
    ResponseEntity<IssuerInformationResponse> registerIssuer(@RequestBody IssuerRegistrationRequest request) {
        String login = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = authorisationService.findUserByLogin(login);

        IssuerProfile issuer = authorisationService.saveIssuer(new IssuerProfile()
                .setRelatedUser(user)
                .setGivenName(request.getGivenName())
                .setNickname(request.getNickname())
                .setFamilyName(request.getFamilyName())
                .setFamousFor(request.getFamousFor())
                .setPicLink(request.getPicLink()));

        return new ResponseEntity<>(new IssuerInformationResponse(
                issuer.getGivenName(), issuer.getNickname(), issuer.getFamilyName(),
                issuer.getFamousFor(), issuer.getPicLink()),
                HttpStatus.OK);
    }

    @PostMapping("/api/register/manager")
    ResponseEntity<ManagerInformationResponse> registerManager(@RequestBody ManagerRegistrationRequest request) {
        String login = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = authorisationService.findUserByLogin(login);

        ManagerProfile manager = authorisationService.saveManager(new ManagerProfile()
                .setRelatedUser(user)
                .setName(request.getName())
                .setPicLink(request.getPicLink())
                .setAccessLevel(0));

        return new ResponseEntity<>(new ManagerInformationResponse(
                manager.getName(), manager.getPicLink()),
                HttpStatus.OK);
    }
}
