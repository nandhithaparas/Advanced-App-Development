package com.example.giftcraft.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="userdetail")
public class Users {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int userId;
    private String email;
    private String name;
    private String password;
    private String role;
}
