package com.phone.book.service;

import com.phone.book.dto.requests.ContactRequest;
import com.phone.book.dto.responses.ContactResponse;
import com.phone.book.model.Contacts;
import com.phone.book.repository.ContactRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ContactService {

    private final ContactRepository contactRepository;

    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    public List<ContactResponse> getAllContacts() {
        return contactRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public ContactResponse getContactById(Long id) {
        Contacts contact = contactRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Contact not found with id: " + id));
        return mapToResponse(contact);
    }

    public ContactResponse createContact(ContactRequest request) {
        validateContactRequest(request);
        Contacts contact = new Contacts();
        updateContactFields(contact, request);
        Contacts savedContact = contactRepository.save(contact);
        return mapToResponse(savedContact);
    }

    public ContactResponse updateContact(Long id, ContactRequest request) {
        validateContactRequest(request);
        Contacts contact = contactRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Contact not found with id: " + id));

        updateContactFields(contact, request);
        return mapToResponse(contactRepository.save(contact));
    }

    public void deleteContact(Long id) {
        if (!contactRepository.existsById(id)) {
            throw new RuntimeException("Contact not found with id: " + id);
        }
        contactRepository.deleteById(id);
    }

    private void validateContactRequest(ContactRequest request) {
        if (request.getFirstname() == null || request.getFirstname().trim().isEmpty()) {
            throw new RuntimeException("First name is required");
        }
        if (request.getEmail() == null || request.getEmail().trim().isEmpty()) {
            throw new RuntimeException("Email is required");
        }
        if (!isValidEmail(request.getEmail())) {
            throw new RuntimeException("Email format is invalid");
        }
        if (request.getPhone() == null || request.getPhone().trim().isEmpty()) {
            throw new RuntimeException("Phone number is required");
        }
    }

    private boolean isValidEmail(String email) {
        String emailRegex = "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$";
        return email.matches(emailRegex);
    }

    private ContactResponse mapToResponse(Contacts contact) {
        ContactResponse response = new ContactResponse();
        response.setId(contact.getId());
        response.setFirstname(contact.getFirstname());
        response.setLastname(contact.getLastname());
        response.setPhone(contact.getPhone());
        response.setEmail(contact.getEmail());
        response.setAddress(contact.getAddress());
        return response;
    }

    private void updateContactFields(Contacts contact, ContactRequest request) {
        contact.setFirstname(request.getFirstname().trim());
        contact.setLastname(request.getLastname() != null ? request.getLastname().trim() : "");
        contact.setPhone(request.getPhone().trim());
        contact.setEmail(request.getEmail().trim());
        contact.setAddress(request.getAddress() != null ? request.getAddress().trim() : "");
    }
}