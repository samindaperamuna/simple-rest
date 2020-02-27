package org.fifthgen.simplerest.data.repository;

import java.util.List;

import org.fifthgen.simplerest.data.model.StudentClass;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClassRepository extends JpaRepository<StudentClass, Integer> {
	
	List<StudentClass> findAll();
}