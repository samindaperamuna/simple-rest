package org.fifthgen.simplerest.data.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Entity
public @Data class Student {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private final int id;

	@NotNull
	private String name;
	
	@NotNull
	private Date dob;
	
	@NotNull
	private String phone;
	
	@NotNull
	private String email;
	
	@NotNull
	private String street;
	
	@NotNull
	private String city;
	
	@NotNull
	private String state;
	
	@NotNull
	private String zip;
}
