package dev.tuzserik.backend.repositories;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;
import dev.tuzserik.backend.model.Card;

@Repository
public interface CardRepository extends JpaRepository<Card, UUID> {
}
