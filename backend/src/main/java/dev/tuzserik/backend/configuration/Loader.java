package dev.tuzserik.backend.configuration;

import lombok.RequiredArgsConstructor;
import org.springframework.lang.Nullable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import javax.transaction.Transactional;
import dev.tuzserik.backend.repositories.UserRepository;
import dev.tuzserik.backend.repositories.RoleRepository;
import dev.tuzserik.backend.model.User;
import dev.tuzserik.backend.model.Role;

@RequiredArgsConstructor @Component
public class Loader implements ApplicationListener<ContextRefreshedEvent> {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private boolean alreadySetup;

    @Override
    public void onApplicationEvent(@Nullable ContextRefreshedEvent contextRefreshedEvent) {
        if (!alreadySetup) {
            Role administratorRole = createRoleIfNotFound("ROLE_ADMINISTRATOR");
            createRoleIfNotFound("ROLE_MANAGER");
            createRoleIfNotFound("ROLE_ISSUER");
            createRoleIfNotFound("ROLE_CLIENT");
            Role userRole = createRoleIfNotFound("ROLE_USER");


            User administrator = new User();
            administrator.setLogin("root");
            administrator.setPassword(passwordEncoder.encode("root"));
            administrator.setRoles(userRole).setRoles(administratorRole);
            userRepository.save(administrator);

            alreadySetup = true;
        }
    }

    @Transactional
    Role createRoleIfNotFound(String name) {
        Role role = roleRepository.findByName(name);

        if (role == null) {
            role = new Role();
            role.setName(name);
            roleRepository.save(role);
        }

        return role;
    }
}
