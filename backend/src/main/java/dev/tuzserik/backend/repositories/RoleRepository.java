package dev.tuzserik.backend.repositories;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;
import dev.tuzserik.backend.model.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, UUID> {
    Role findByName(String name);
}
