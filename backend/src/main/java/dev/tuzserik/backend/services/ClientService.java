package dev.tuzserik.backend.services;

import dev.tuzserik.backend.model.Service;
import dev.tuzserik.backend.model.User;
import dev.tuzserik.backend.repositories.ServiceRepository;
import lombok.AllArgsConstructor;

import java.util.Collection;
@AllArgsConstructor
@org.springframework.stereotype.Service
public class ClientService {
    private final ServiceRepository serviceRepository;

    public Collection<Service> getAllUserServices(User user) {
        return serviceRepository.findAll();
    }
}
