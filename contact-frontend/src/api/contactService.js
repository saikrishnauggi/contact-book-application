// src/api/contactService.js
import { API_CONFIG } from '../config/constants';

// Helper to handle response status
const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.text();
    throw new Error(errorData || 'Request failed');
  }
  return response.json();
};

export const fetchContacts = async () => {
  const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.GET_ALL_CONTACTS}`);
  return handleResponse(response);
};

export const createContact = async (data) => {
  const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CREATE_CONTACT}`, {
    method: 'POST',
    headers: API_CONFIG.HEADERS,
    body: JSON.stringify(data)
  });
  return handleResponse(response);
};

export const updateContact = async (id, data) => {
  const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.UPDATE_CONTACT}/${id}`, {
    method: 'PUT',
    headers: API_CONFIG.HEADERS,
    body: JSON.stringify(data)
  });
  return handleResponse(response);
};

export const deleteContact = async (id) => {
  const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.DELETE_CONTACT}/${id}`, {
    method: 'DELETE'
  });
  if (!response.ok) throw new Error('Failed to delete');
  return true;
};