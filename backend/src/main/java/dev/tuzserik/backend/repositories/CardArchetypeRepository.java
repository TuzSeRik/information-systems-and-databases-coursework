package dev.tuzserik.backend.repositories;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.UUID;
import dev.tuzserik.backend.model.CardArchetype;
import dev.tuzserik.backend.model.User;

@Repository
public interface CardArchetypeRepository extends JpaRepository<CardArchetype, UUID> {
    List<CardArchetype> findAllByIssuer(User issuer);
}
