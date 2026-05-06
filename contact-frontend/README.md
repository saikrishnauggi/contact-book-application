# Contact Book - Frontend

A modern, responsive React-based frontend for managing contacts. This is a basic UI application that communicates with a Spring Boot backend API.

## Features

✅ **View All Contacts** - Display all contacts in a beautiful card layout
✅ **Add New Contact** - Create new contacts with first name, last name, email, phone, address, and password
✅ **Edit Contact** - Update existing contact information
✅ **Delete Contact** - Remove contacts with confirmation
✅ **Search Contacts** - Search contacts by name, email, or phone number
✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
✅ **Error Handling** - Displays user-friendly error messages

## Tech Stack

- **React 19.2.5** - UI framework
- **Vite 8.0.10** - Build tool & dev server
- **CSS3** - Styling with gradients and animations
- **Fetch API** - HTTP communication with backend

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend server running on `http://localhost:8080`

## Installation

1. Navigate to the frontend directory:
```bash
cd contact-frontend
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

### Development Mode
Start the development server with hot reload:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

### Production Build
Create an optimized production build:
```bash
npm run build
```

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
contact-frontend/
├── src/
│   ├── App.jsx          # Main application component (CRUD operations)
│   ├── App.css          # Styling for the entire application
│   ├── index.css        # Global styles
│   └── main.jsx         # React DOM entry point
├── index.html           # HTML template
├── package.json         # Project dependencies
├── vite.config.js       # Vite configuration
└── eslint.config.js     # ESLint configuration
```

## API Endpoints Used

The frontend communicates with the following backend endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/contacts` | Fetch all contacts |
| POST | `/contacts/create` | Create a new contact |
| GET | `/contacts/retrieve/{id}` | Get a single contact by ID |
| PUT | `/contacts/update/{id}` | Update an existing contact |
| DELETE | `/contacts/delete/{id}` | Delete a contact |

## Component Details

### App Component (`App.jsx`)
Main component that handles:
- State management for contacts and form data
- API calls for CRUD operations
- Search filtering
- Edit mode handling
- Form validation

### Styling (`App.css`)
- Modern gradient backgrounds (purple theme)
- Responsive grid layout for contact cards
- Smooth transitions and hover effects
- Mobile-first responsive design

## Features Walkthrough

### Adding a Contact
1. Fill in the form fields (First Name, Last Name, Email, Phone are required)
2. Optionally add Address and Password
3. Click "Add Contact" button
4. Contact appears in the list below

### Editing a Contact
1. Click the edit button (✎) on any contact card
2. Form auto-fills with current data
3. Modify the fields as needed
4. Click "Update Contact" to save changes

### Deleting a Contact
1. Click the delete button (🗑) on any contact card
2. Confirm the deletion when prompted
3. Contact is removed from the list

### Searching Contacts
1. Use the search bar at the top of the contacts list
2. Type name, email, or phone number
3. List filters in real-time

## Error Handling

- Connection errors are displayed in red error messages
- Form validation prevents empty required fields
- API errors are caught and displayed to the user
- Loading states prevent multiple simultaneous requests

## UI Design

- **Color Scheme**: Purple gradient (#667eea to #764ba2)
- **Layout**: Responsive grid system
- **Cards**: Hover effects with shadow and elevation
- **Forms**: Clean, organized two-column layout on desktop
- **Typography**: Modern sans-serif fonts
- **Emojis**: Visual icons for better UX

## Notes

- The backend must be running on `http://localhost:8080` for the application to work
- CORS should be properly configured on the backend to allow frontend requests
- All required fields must be filled before adding/updating contacts
- Search is case-insensitive

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- [ ] Authentication/Login system
- [ ] Contact categories/groups
- [ ] Export contacts to CSV
- [ ] Import contacts from CSV
- [ ] Contact profile pictures
- [ ] Advanced filtering options
- [ ] Dark mode support
- [ ] Contact notes/details
