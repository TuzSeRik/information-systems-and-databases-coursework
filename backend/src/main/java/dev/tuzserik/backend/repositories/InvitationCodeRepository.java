package dev.tuzserik.backend.repositories;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;
import dev.tuzserik.backend.model.InvitationCode;

@Repository
public interface InvitationCodeRepository extends JpaRepository<InvitationCode, UUID> {
    InvitationCode findByCode(UUID code);
}
