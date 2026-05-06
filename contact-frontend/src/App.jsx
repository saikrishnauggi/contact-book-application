import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    address: '',
    password: ''
  });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const API_BASE_URL = 'http://localhost:8080/contacts';

  // Fetch all contacts
  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await fetch(`${API_BASE_URL}`);
      if (!response.ok) throw new Error('Failed to fetch contacts');
      const data = await response.json();
      setContacts(data);
    } catch (err) {
      setError('Error fetching contacts: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.firstname || !formData.lastname || !formData.email || !formData.phone) {
      setError('Please fill in all required fields');
      return;
    }

    try {
      setLoading(true);
      setError('');
      
      if (editingId) {
        // Update contact
        const response = await fetch(`${API_BASE_URL}/update/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (!response.ok) throw new Error('Failed to update contact');
        setEditingId(null);
      } else {
        // Create new contact
        const response = await fetch(`${API_BASE_URL}/create`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (!response.ok) throw new Error('Failed to create contact');
      }
      
      // Reset form and refresh contacts
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        address: '',
        password: ''
      });
      fetchContacts();
    } catch (err) {
      setError('Error saving contact: ' + err.message);
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
    if (!window.confirm('Are you sure you want to delete this contact?')) return;

    try {
      setLoading(true);
      setError('');
      const response = await fetch(`${API_BASE_URL}/delete/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) throw new Error('Failed to delete contact');
      fetchContacts();
    } catch (err) {
      setError('Error deleting contact: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      address: '',
      password: ''
    });
    setEditingId(null);
    setError('');
  };

  // Filter contacts based on search term
  const filteredContacts = contacts.filter(contact =>
    contact.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.phone.includes(searchTerm)
  );

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>📇 Contact Book</h1>
        <p>Manage your contacts easily</p>
      </header>

      <div className="app-content">
        {/* Form Section */}
        <section className="form-section">
          <h2>{editingId ? 'Edit Contact' : 'Add New Contact'}</h2>
          
          {error && <div className="error-message">{error}</div>}
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstname">First Name *</label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  placeholder="Enter first name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastname">Last Name *</label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  placeholder="Enter last name"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter phone number"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter address"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter password"
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Saving...' : editingId ? 'Update Contact' : 'Add Contact'}
              </button>
              {editingId && (
                <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                  Cancel
                </button>
              )}
            </div>
          </form>
        </section>

        {/* Contacts List Section */}
        <section className="contacts-section">
          <div className="section-header">
            <h2>Contacts ({filteredContacts.length})</h2>
            <input
              type="text"
              className="search-input"
              placeholder="🔍 Search by name, email, or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {loading && <div className="loading">Loading...</div>}

          {filteredContacts.length === 0 ? (
            <div className="no-contacts">
              <p>No contacts found. Start by adding a new contact!</p>
            </div>
          ) : (
            <div className="contacts-grid">
              {filteredContacts.map(contact => (
                <div key={contact.id} className="contact-card">
                  <div className="contact-header">
                    <div className="contact-name">
                      <h3>{contact.firstname} {contact.lastname}</h3>
                      <span className="contact-id">ID: {contact.id}</span>
                    </div>
                    <div className="contact-actions">
                      <button
                        className="btn-icon btn-edit"
                        onClick={() => handleEdit(contact)}
                        title="Edit"
                      >
                        ✎
                      </button>
                      <button
                        className="btn-icon btn-delete"
                        onClick={() => handleDelete(contact.id)}
                        title="Delete"
                      >
                        🗑
                      </button>
                    </div>
                  </div>

                  <div className="contact-details">
                    <div className="detail-row">
                      <span className="label">📧 Email:</span>
                      <span className="value">{contact.email}</span>
                    </div>
                    <div className="detail-row">
                      <span className="label">📱 Phone:</span>
                      <span className="value">{contact.phone}</span>
                    </div>
                    {contact.address && (
                      <div className="detail-row">
                        <span className="label">📍 Address:</span>
                        <span className="value">{contact.address}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      <footer className="app-footer">
        <p>&copy; 2024 Contact Book. Built with React & Vite.</p>
      </footer>
    </div>
  );
}

export default App;
