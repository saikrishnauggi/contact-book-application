// src/hooks/useContacts.js
import { useState, useEffect } from 'react';
import * as api from '../api/contactService';

export const useContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loadContacts = async () => {
    try {
      setLoading(true);
      const data = await api.fetchContacts();
      setContacts(data);
    } catch (err) {
      setError('Error fetching contacts: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadContacts(); }, []);

  // Update this return statement to include the setters
  return { 
    contacts, 
    loading, 
    setLoading, // <--- Add this
    error, 
    setError,   // <--- Add this
    refresh: loadContacts 
  };
};