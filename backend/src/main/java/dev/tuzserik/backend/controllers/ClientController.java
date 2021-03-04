package dev.tuzserik.backend.controllers;

import dev.tuzserik.backend.model.User;
import dev.tuzserik.backend.services.AccessService;
import dev.tuzserik.backend.services.AuthorisationService;
import dev.tuzserik.backend.services.ClientService;
import dev.tuzserik.backend.services.ContractService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import dev.tuzserik.backend.model.Card;
import dev.tuzserik.backend.requests.ServiceBuyRequest;
import dev.tuzserik.backend.responses.ServiceListResponse;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class ClientController {
    private final AccessService accessService;
    private final AuthorisationService authorisationService;
    private final ContractService contractService;
    private final ClientService clientService;

    @GetMapping("/api/service/client")
    ResponseEntity<ServiceListResponse> getClientServices() {
        String login = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = authorisationService.findUserByLogin(login);

        if (accessService.isClient(user))
            return new ResponseEntity<>(
                    new ServiceListResponse(clientService.getAllUserServices(user)), HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }

    @PostMapping("/api/service/buy")
    ResponseEntity<Card> buyService(@RequestBody ServiceBuyRequest request) {
        String login = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = authorisationService.findUserByLogin(login);

        if (accessService.isClient(user))
            return new ResponseEntity<>(
                    contractService.createContract(
                            user,
                            request.getServiceId(),
                            request.getCardId()
                    ), HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }
}
