import React from 'react';

export default function ContactForm({ formData, setFormData, onSubmit, onCancel, editingId, loading }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="form-section">
      <h2>{editingId ? 'Edit Contact' : 'Add New Contact'}</h2>
      <form onSubmit={onSubmit} className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label>First Name *</label>
            <input name="firstname" value={formData.firstname} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Last Name *</label>
            <input name="lastname" value={formData.lastname} onChange={handleInputChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Email *</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Phone *</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Address</label>
            <input name="address" value={formData.address} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
          </div>
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Saving...' : editingId ? 'Update Contact' : 'Add Contact'}
          </button>
          {editingId && (
            <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
          )}
        </div>
      </form>
    </section>
  );
}