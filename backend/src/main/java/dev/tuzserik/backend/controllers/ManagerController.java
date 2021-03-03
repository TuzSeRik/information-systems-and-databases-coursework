package dev.tuzserik.backend.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import dev.tuzserik.backend.requests.GeneralMarkRequest;
import dev.tuzserik.backend.responses.ContractListResponse;
import dev.tuzserik.backend.responses.TransactionListResponse;
import dev.tuzserik.backend.responses.GeneralMarkResponse;
import dev.tuzserik.backend.services.*;
import dev.tuzserik.backend.model.User;
import dev.tuzserik.backend.model.Contract;
import dev.tuzserik.backend.model.Transaction;

@AllArgsConstructor @RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class ManagerController {
    private final AuthorisationService authorisationService;
    private final AccessService accessService;
    private final ContractService contractService;
    private final TransactionService transactionService;

    @GetMapping("/api/contract")
    ResponseEntity<ContractListResponse> getAllContracts() {
        String login = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = authorisationService.findUserByLogin(login);

        if (accessService.isManager(user))
            return new ResponseEntity<>(
                    new ContractListResponse(contractService.getManagerContracts(user)), HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }

    @PostMapping("/api/contract")
    ResponseEntity<GeneralMarkResponse> markContract(@RequestBody GeneralMarkRequest request) {
        String login = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = authorisationService.findUserByLogin(login);
        Contract contract = contractService.findOne(request.getId());

        if (accessService.isManager(user) && contract.getManager().equals(user)) {
            contractService.markContract(contract, request.getStatus());

            return new ResponseEntity<>(
                    new GeneralMarkResponse(contract.getId(), contract.getStatus()),
                        HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }

    @GetMapping("/api/transaction")
    ResponseEntity<TransactionListResponse> getAllTransactions() {
        String login = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = authorisationService.findUserByLogin(login);

        if (accessService.isManager(user))
            return new ResponseEntity<>(
                    new TransactionListResponse(transactionService.getPendingTransactions()),
                        HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }

    @PostMapping("/api/transaction")
    ResponseEntity<GeneralMarkResponse> markTransaction(@RequestBody GeneralMarkRequest request) {
        String login = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = authorisationService.findUserByLogin(login);

        if (accessService.isManager(user)) {
            Transaction transaction = transactionService.markTransaction(request.getId(),
                                                                            request.getStatus());

            if (transaction != null)
                return new ResponseEntity<>(new GeneralMarkResponse(request.getId(), request.getStatus()),
                                                HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }
}
