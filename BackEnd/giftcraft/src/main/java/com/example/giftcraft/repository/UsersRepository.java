package com.example.giftcraft.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.giftcraft.model.*;

public interface UsersRepository extends JpaRepository<Users, Integer> {
	Optional<Users> findByEmail(String email);
	Optional<Users> deleteByEmail(String email);
}
