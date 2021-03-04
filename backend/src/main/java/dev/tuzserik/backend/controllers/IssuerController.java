package dev.tuzserik.backend.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import dev.tuzserik.backend.requests.*;
import dev.tuzserik.backend.responses.*;
import dev.tuzserik.backend.services.*;
import dev.tuzserik.backend.model.*;

@AllArgsConstructor @RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class IssuerController {
    private final AuthorisationService authorisationService;
    private final AccessService accessService;
    private final IssuerService issuerService;
    private final CardService cardService;
    private final TransactionService transactionService;

    @GetMapping("/api/archetype")
    ResponseEntity<CardArchetypeListResponse> getAllIssuerArchetypes() {
        String login = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = authorisationService.findUserByLogin(login);

        if (accessService.isIssuer(user)) {
                return new ResponseEntity<>(new CardArchetypeListResponse(
                        issuerService.getAllIssuerArchetypes(user)),
                        HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);

    }

    @PostMapping("/api/archetype")
    ResponseEntity<CardArchetypeInformationResponse> addNewArchetype(
            @RequestBody CardArchetypeCreationRequest request) {
        String login = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = authorisationService.findUserByLogin(login);

        if (accessService.isIssuer(user)) {
            CardArchetype archetype = issuerService.addCardArchetype(
                    request.getName(),
                    request.getIssuerId(),
                    request.getValue()
            );
            return new ResponseEntity<>(new CardArchetypeInformationResponse(
                    archetype.getId(),
                    request.getName(),
                    request.getIssuerId(),
                    request.getValue()
            ), HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }

    @GetMapping("/api/service")
    ResponseEntity<ServiceListResponse> getAllServicesForArchetypes() {
        String login = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = authorisationService.findUserByLogin(login);

        if (accessService.isIssuer(user)) {
            return new ResponseEntity<>(new ServiceListResponse(
                    issuerService.findAllServicesForArchetypesOf(user)
            ), HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }

    @PostMapping("/api/service")
    ResponseEntity<ServiceInformationResponse> addNewService(@RequestBody ServiceCreationRequest request) {
        String login = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = authorisationService.findUserByLogin(login);

        if (accessService.isIssuer(user)) {
            Service service = issuerService.addService(
                    request.getArchetypeId(),
                    request.getName(),
                    request.getPrice()
            );
            return new ResponseEntity<>(
                    new ServiceInformationResponse(
                            service.getId(),
                            service.getName(),
                            service.getCardArchetype().getId(),
                            service.getPrice()
                    ), HttpStatus.OK
            );
        }
        else
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }

    @GetMapping("/api/card")
    ResponseEntity<CardListResponse> getAllCardsForUser() {
        String login = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = authorisationService.findUserByLogin(login);

        if (accessService.isIssuer(user)) {
            return new ResponseEntity<>(
                    new CardListResponse(
                        cardService.findAllCardsForUser(user)
            ), HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }

    @PostMapping("/api/card")
    ResponseEntity<CardInformationResponse> addNewCard(@RequestBody CardCreationRequest request) {
        String login = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = authorisationService.findUserByLogin(login);

        if (accessService.isIssuer(user)) {
            Card card = cardService.addCard(
                    request.getArchetypeId(),
                    request.getName(),
                    request.getUserId(),
                    request.getBalance()
            );
            return new ResponseEntity<>(
                    new CardInformationResponse(
                            card.getId(),
                            card.getCardArchetype().getId(),
                            card.getName(),
                            card.getOwner().getId(),
                            card.getBalance()
                    ), HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }

    @PostMapping("/api/card/transfer")
    ResponseEntity<CardInformationResponse> transferCardToClient(@RequestBody CardTransferRequest request) {
        String login = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = authorisationService.findUserByLogin(login);

        if (accessService.isIssuer(user)) {
            Card card = transactionService.transferCard(
                    request.getCardId(),
                    request.getOwnerId(),
                    request.getNewOwnerId()
            );
            return new ResponseEntity<>(
                    new CardInformationResponse(
                            card.getId(),
                            card.getCardArchetype().getId(),
                            card.getName(),
                            card.getOwner().getId(),
                            card.getBalance()
                    ), HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }
}
