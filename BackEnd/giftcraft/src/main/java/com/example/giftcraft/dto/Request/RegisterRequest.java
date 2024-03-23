package com.example.giftcraft.dto.Request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor  
@NoArgsConstructor
public class RegisterRequest {
    private Long userRegId;
	private String username;
	private String emailid;
	private String password;
}
