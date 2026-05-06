// src/App.jsx
import React, { useState } from 'react';
import { useContacts } from './hooks/useContacts';
import * as api from './api/contactService';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './App.css';

function App() {
  const { contacts, refresh, loading, setLoading, error, setError } = useContacts();
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const [formData, setFormData] = useState({
    firstname: '', lastname: '', email: '', phone: '', address: '', password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (editingId) {
        await api.updateContact(editingId, formData);
      } else {
        await api.createContact(formData);
      }
      
      // Reset after success
      setFormData({ firstname: '', lastname: '', email: '', phone: '', address: '', password: '' });
      setEditingId(null);
      await refresh(); // Re-fetch the list
    } catch (err) {
      setError(err.message);
      console.error("Save error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (contact) => {
    setFormData(contact);
    setEditingId(contact.id);
    window.scrollTo(0, 0);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure?')) return;
    try {
      setLoading(true);
      await api.deleteContact(id);
      await refresh();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filtered = contacts.filter(c => 
    c.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.lastname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <header className="app-header"><h1>📇 Contact Book</h1></header>
      
      <main className="app-content">
        {error && <div className="error-message">{error}</div>}
        
        <ContactForm 
          formData={formData} 
          setFormData={setFormData}
          onSubmit={handleSubmit}
          onCancel={() => { setEditingId(null); setFormData({}); }}
          editingId={editingId}
          loading={loading}
        />
        
        <ContactList 
          contacts={filtered} 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm}
          onEdit={handleEdit} 
          onDelete={handleDelete}
        />
      </main>
    </div>
  );
}

export default App;