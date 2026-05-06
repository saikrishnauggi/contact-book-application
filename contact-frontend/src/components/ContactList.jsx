import React from 'react';
import ContactCard from './ContactCard';

export default function ContactList({ contacts, onEdit, onDelete, searchTerm, setSearchTerm }) {
  return (
    <section className="contacts-section">
      <div className="section-header">
        <h2>Contacts ({contacts.length})</h2>
        <input
          type="text"
          className="search-input"
          placeholder="🔍 Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="contacts-grid">
        {contacts.map(contact => (
          <ContactCard key={contact.id} contact={contact} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </div>
    </section>
  );
}