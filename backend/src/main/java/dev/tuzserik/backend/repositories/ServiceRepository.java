package dev.tuzserik.backend.repositories;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Collection;
import java.util.List;
import java.util.UUID;
import dev.tuzserik.backend.model.CardArchetype;
import dev.tuzserik.backend.model.Service;

@Repository
public interface ServiceRepository extends JpaRepository<Service, UUID> {
    List<Service> findAllByCardArchetypeIn(Collection<CardArchetype> archetypes);
}
