import React from 'react';

export default function ContactCard({ contact, onEdit, onDelete }) {
  return (
    <div className="contact-card">
      <div className="contact-header">
        <div className="contact-name">
          <h3>{contact.firstname} {contact.lastname}</h3>
        </div>
        <div className="contact-actions">
          <button className="btn-icon btn-edit" onClick={() => onEdit(contact)}>✎</button>
          <button className="btn-icon btn-delete" onClick={() => onDelete(contact.id)}>🗑</button>
        </div>
      </div>
      <div className="contact-details">
        <div className="detail-row"><span className="label">📧 Email:</span> {contact.email}</div>
        <div className="detail-row"><span className="label">📱 Phone:</span> {contact.phone}</div>
      </div>
    </div>
  );
}