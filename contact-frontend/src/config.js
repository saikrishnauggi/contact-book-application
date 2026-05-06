// API Configuration
export const API_CONFIG = {
  BASE_URL: 'http://localhost:8080',
  ENDPOINTS: {
    CREATE_CONTACT: '/contacts/create',
    GET_ALL_CONTACTS: '/contacts',
    GET_CONTACT: '/contacts/retrieve',
    UPDATE_CONTACT: '/contacts/update',
    DELETE_CONTACT: '/contacts/delete'
  },
  TIMEOUT: 30000, // 30 seconds
  HEADERS: {
    'Content-Type': 'application/json'
  }
};

// UI Configuration
export const UI_CONFIG = {
  ITEMS_PER_PAGE: 10,
  THEME_COLOR: '#667eea',
  SECONDARY_COLOR: '#764ba2'
};

// Form validation
export const VALIDATION_RULES = {
  firstname: {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\s]*$/
  },
  lastname: {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\s]*$/
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  phone: {
    required: true,
    minLength: 10,
    pattern: /^[\d\s\-\+\(\)]*$/
  },
  address: {
    required: false,
    maxLength: 200
  },
  password: {
    required: false,
    minLength: 6
  }
};

// Messages
export const MESSAGES = {
  SUCCESS: {
    CREATE: 'Contact created successfully!',
    UPDATE: 'Contact updated successfully!',
    DELETE: 'Contact deleted successfully!'
  },
  ERROR: {
    FETCH: 'Failed to fetch contacts. Please check your connection.',
    CREATE: 'Failed to create contact. Please try again.',
    UPDATE: 'Failed to update contact. Please try again.',
    DELETE: 'Failed to delete contact. Please try again.',
    VALIDATION: 'Please fill in all required fields correctly.'
  },
  CONFIRM: {
    DELETE: 'Are you sure you want to delete this contact?'
  }
};
