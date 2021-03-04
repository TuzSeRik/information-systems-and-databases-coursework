package dev.tuzserik.backend.repositories;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.UUID;
import dev.tuzserik.backend.model.Card;
import dev.tuzserik.backend.model.User;

@Repository
public interface CardRepository extends JpaRepository<Card, UUID> {
    List<Card> findAllByOwner(User user);
}
