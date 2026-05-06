package com.phone.book.dto.requests;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ContactRequest {

    private String firstname;

    private String lastname;

    private String email;

    private String phone;

    private String address;

    private String password;
}
