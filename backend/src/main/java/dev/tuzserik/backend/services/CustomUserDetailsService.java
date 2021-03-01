package dev.tuzserik.backend.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import javax.transaction.Transactional;
import java.util.stream.Collectors;
import dev.tuzserik.backend.model.User;

@AllArgsConstructor @Transactional @Service
public class CustomUserDetailsService implements UserDetailsService {
    private final AuthorisationService authorisationService;

    @Override
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
        User user = authorisationService.findUserByLogin(login);
        return new org.springframework.security.core.userdetails.User(
                user.getLogin(),
                user.getPassword(),
                user.getRoles().stream()
                        .map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toSet())
        );
    }
}
