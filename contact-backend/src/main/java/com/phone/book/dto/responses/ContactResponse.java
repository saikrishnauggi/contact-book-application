package com.phone.book.dto.responses;

import com.phone.book.model.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ContactResponse {

    private long id;

    private String firstname;

    private String lastname;

    private String email;

    private String phone;

    private String address;

    //development purpose
    private String password;

    //private Role role;
}
