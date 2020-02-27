package org.fifthgen.simplerest.data.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Entity
public @Data class StudentClass {

	@Id
	private int id;
	
	@NotNull
	private String name;
}
