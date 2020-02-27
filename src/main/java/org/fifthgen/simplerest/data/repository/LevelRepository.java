package org.fifthgen.simplerest.data.repository;

import org.fifthgen.simplerest.data.model.Level;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LevelRepository extends JpaRepository<Level, Integer>{

}
	