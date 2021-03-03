package dev.tuzserik.backend.repositories;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.UUID;
import dev.tuzserik.backend.model.Contract;
import dev.tuzserik.backend.model.User;

@Repository
public interface ContractRepository extends JpaRepository<Contract, UUID> {
    List<Contract> findAllByManager(User user);
}
