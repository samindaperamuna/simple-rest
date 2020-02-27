package org.fifthgen.simplerest.data.repository;

import org.fifthgen.simplerest.data.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

	User findByUsername(String username);
}
