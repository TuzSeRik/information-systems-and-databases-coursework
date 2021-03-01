package dev.tuzserik.backend.repositories;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;
import dev.tuzserik.backend.model.ClientProfile;
import dev.tuzserik.backend.model.User;

@Repository
public interface ClientProfileRepository extends JpaRepository<ClientProfile, UUID> {
    ClientProfile findClientProfileByRelatedUser(User user);
}
