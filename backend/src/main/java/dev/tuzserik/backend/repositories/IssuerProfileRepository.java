package dev.tuzserik.backend.repositories;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;
import dev.tuzserik.backend.model.IssuerProfile;
import dev.tuzserik.backend.model.User;

@Repository
public interface IssuerProfileRepository extends JpaRepository<IssuerProfile, UUID> {
    IssuerProfile findIssuerProfileByRelatedUser(User user);
}
