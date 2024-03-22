package com.example.giftcraft.service;

import com.example.giftcraft.repository.*;
import com.example.giftcraft.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsersService {

	@Autowired
    private  UsersRepository usersRepository;

    public List<Users> getAllUsers() {
        return usersRepository.findAll();
    }	
    public Users getUserById(int id) {
        Optional<Users> userOptional = usersRepository.findById(id);
        return userOptional.orElse(null);
    }

    public Users createUser(Users user) {
        return usersRepository.save(user);
    }

    public Users updateUser(String email, Users updatedUser) {
        Optional<Users> existingUserOptional = usersRepository.findByEmail(email);

        if (existingUserOptional.isPresent()) {
            Users existingUser = existingUserOptional.get();
            
            existingUser.setPassword(updatedUser.getPassword());
          

            return usersRepository.save(existingUser);
        } else {
            return null; 
        }
    }

    public Optional<Users> findByUsername(String email) {
        return usersRepository.findByEmail(email);
    }
    public Optional<Users> deleteByUsername(String email) {
    	return usersRepository.deleteByEmail(email);
    }
    public void deleteUser(int id) {
        usersRepository.deleteById(id);
    }
}
