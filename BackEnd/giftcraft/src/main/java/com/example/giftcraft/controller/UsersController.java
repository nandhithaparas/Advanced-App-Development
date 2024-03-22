package com.example.giftcraft.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.giftcraft.model.*;
import com.example.giftcraft.service.*;

import jakarta.transaction.Transactional;


@RestController
@Transactional
@RequestMapping("/auth/users")
public class UsersController {
    @Autowired
    private UsersService usersService;
    @GetMapping("/getall")
    public List<Users> getAllUsers() {
        return usersService.getAllUsers();
    }
    @GetMapping("/getlogin/{id}")
    public Users getUserById(@PathVariable int id) {
        return usersService.getUserById(id);
    }
    @GetMapping("/get/{email}")
    public Optional<Users> findByUsername(@PathVariable String email) {
    	return usersService.findByUsername(email);
    }
    @PostMapping("/post")
    public Users createUser(@RequestBody Users user) {
        return usersService.createUser(user);
    }
    @PutMapping("put/{email}")
    public Users updateUser(@PathVariable String email, @RequestBody Users updatedUser) {
        return usersService.updateUser(email, updatedUser);
    }

    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable int id) {
        usersService.deleteUser(id);
        return "Account Deleted with id";
    }
    @DeleteMapping("/delete/{email}")
    public String deleteUseremail(@PathVariable String email) {
    	usersService.deleteByUsername(email);
    	return "Account Deleted";
    }
}
