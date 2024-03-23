package com.example.giftcraft.repository;

import com.example.giftcraft.entity.UserRegister;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
public interface UserRegitserRepository extends JpaRepository<UserRegister,Long> {
    Optional<UserRegister>findByUsername(String username);
}
