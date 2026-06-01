# Contact Book Application 📇

A full-stack web application for managing contacts with a Spring Boot backend and React frontend. This application provides a complete CRUD interface for storing, searching, and managing contact information.

---

## 📋 Overview

Contact Book Application is a modern, responsive contact management system built with:
- **Backend**: Spring Boot 4.0.6 with Java 21, Spring Data JPA, and MySQL
- **Frontend**: React 19.2.5 with Vite build tool and modern CSS3 styling

The application features a beautiful user interface with real-time search, full CRUD operations, and a responsive design that works seamlessly across all devices.

---

## ✨ Features

### Core Functionality
- ✅ **View All Contacts** - Display all contacts in an attractive card-based layout
- ✅ **Add New Contacts** - Create new contacts with comprehensive information
- ✅ **Edit Contacts** - Update existing contact details
- ✅ **Delete Contacts** - Remove contacts with confirmation dialog
- ✅ **Search Contacts** - Real-time search by name, email, or phone number
- ✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- ✅ **Error Handling** - User-friendly error messages and validation

### Technical Features
- RESTful API architecture
- CORS-enabled for cross-origin requests
- Form validation on client and server side
- Smooth animations and transitions
- Hot module replacement during development
- Production-ready build optimization

---

## 🛠️ Tech Stack

### Backend
- **Framework**: Spring Boot 4.0.6
- **Language**: Java 21
- **Database**: MySQL
- **ORM**: Spring Data JPA
- **Build Tool**: Maven
- **Additional Libraries**:
  - Lombok (for reducing boilerplate code)
  - Spring Web MVC

### Frontend
- **Framework**: React 19.2.5
- **Build Tool**: Vite 8.0.10
- **Styling**: CSS3 with modern features (gradients, animations)
- **HTTP Client**: Fetch API
- **Development Server**: Vite dev server with HMR
- **Linting**: ESLint

### Language Composition
- JavaScript: 47.9%
- Java: 39.5%
- CSS: 10.7%
- HTML: 1.9%

---

## 📦 Prerequisites

### For Backend
- Java Development Kit (JDK) 21 or higher
- Maven 3.6 or higher
- MySQL 8.0 or higher
- Git

### For Frontend
- Node.js v14 or higher
- npm 6+ or yarn
- A modern web browser

---

## 🚀 Installation & Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/saikrishnauggi/contact-book-application.git
cd contact-book-application
```

### Step 2: Setup Backend

1. Navigate to the backend directory:
```bash
cd contact-backend
```

2. Create a MySQL database:
```sql
CREATE DATABASE contact_book;
```

3. Update database configuration in `src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/contact_book
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
```

4. Run the backend:
```bash
# On Linux/Mac
./mvnw spring-boot:run

# On Windows
mvnw.cmd spring-boot:run
```

The backend will start at `http://localhost:8080`

### Step 3: Setup Frontend

1. Navigate to the frontend directory:
```bash
cd contact-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

4. Update `.env` with your backend URL (if different):
```
VITE_API_BASE_URL=http://localhost:8080
VITE_APP_NAME=Contact Book
VITE_ENV=development
```

5. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

---

## 📁 Project Structure

```
contact-book-application/
├── contact-backend/                    # Spring Boot backend
│   ├── src/main/java/com/phone/book/
│   │   ├── BookApplication.java       # Main Spring Boot application
│   │   ├── controller/                # REST API controllers
│   │   ├── service/                   # Business logic services
│   │   ├── repository/                # Data access layer (JPA repositories)
│   │   ├── model/                     # Entity models
│   │   └── dto/                       # Data Transfer Objects
│   ├── src/main/resources/
│   │   └── application.properties     # Configuration file
│   ├── pom.xml                        # Maven dependencies
│   ├── mvnw / mvnw.cmd               # Maven wrapper
│   └── .gitignore
│
└── contact-frontend/                  # React frontend
    ├── src/
    │   ├── App.jsx                    # Main React component
    │   ├── App.css                    # Component styling
    │   ├── index.css                  # Global styles
    │   └── main.jsx                   # React entry point
    ├── public/                        # Static assets
    ├── index.html                     # HTML template
    ├── package.json                   # Dependencies
    ├── vite.config.js                # Vite configuration
    ├── eslint.config.js              # ESLint configuration
    ├── .env.example                  # Environment variables template
    ├── .gitignore
    ├── README.md                     # Frontend documentation
    └── QUICKSTART.md                 # Quick start guide
```

---

## 🔌 API Endpoints

The frontend communicates with the following REST API endpoints:

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|---|
| GET | `/contacts` | Fetch all contacts | N/A |
| POST | `/contacts/create` | Create a new contact | Contact DTO |
| GET | `/contacts/retrieve/{id}` | Get a single contact by ID | N/A |
| PUT | `/contacts/update/{id}` | Update an existing contact | Contact DTO |
| DELETE | `/contacts/delete/{id}` | Delete a contact | N/A |

### Contact Data Model

```json
{
  "id": "number",
  "firstname": "string",
  "lastname": "string",
  "email": "string",
  "phone": "string",
  "address": "string (optional)",
  "password": "string (optional)"
}
```

---

## 💻 Development

### Running in Development Mode

**Terminal 1 - Backend:**
```bash
cd contact-backend
./mvnw spring-boot:run
```

**Terminal 2 - Frontend:**
```bash
cd contact-frontend
npm run dev
```

Open your browser and navigate to `http://localhost:5173`

### Available Frontend Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint to check code quality
npm run lint
```

### Backend Maven Commands

```bash
# Run the application
./mvnw spring-boot:run

# Build the application
./mvnw clean package

# Run tests
./mvnw test

# Clean build artifacts
./mvnw clean
```

---

## 🎨 UI Design

### Design Philosophy
- **Modern & Clean**: Purple gradient theme (#667eea to #764ba2)
- **Responsive**: Mobile-first approach with fluid layouts
- **Interactive**: Smooth transitions and hover effects
- **Accessible**: Semantic HTML and clear visual hierarchy

### Color Scheme
- Primary Gradient: Purple to Deep Purple
- Card Shadows: Subtle elevation effects
- Hover Effects: Smooth scale and shadow transitions
- Text: Dark text on light backgrounds for readability

### Key Components
- **Header Section**: Search bar with real-time filtering
- **Contact Cards**: Grid layout with edit/delete actions
- **Form Section**: Two-column layout on desktop, single column on mobile
- **Error Messages**: Red-colored toast notifications
- **Loading States**: Prevent multiple simultaneous requests

---

## 🔒 CORS Configuration

To ensure the frontend can communicate with the backend, CORS must be properly configured in Spring Boot.

Create or update `CorsConfig.java` in your backend:

```java
package com.phone.book.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/contacts/**")
                    .allowedOrigins("http://localhost:5173")
                    .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                    .allowedHeaders("*")
                    .allowCredentials(true)
                    .maxAge(3600);
            }
        };
    }
}
```

---

## 🐛 Troubleshooting

### Backend Issues

**Issue**: "Connection refused" when starting backend
- **Solution**: Ensure MySQL is running and the database is created

**Issue**: Port 8080 already in use
- **Solution**: Change the port in `application.properties`:
  ```properties
  server.port=8081
  ```

**Issue**: "Could not connect to database" error
- **Solution**: Verify database credentials in `application.properties`

### Frontend Issues

**Issue**: "Failed to fetch contacts" error
- **Solution**: 
  - Check if backend is running on `http://localhost:8080`
  - Verify CORS configuration on backend
  - Check browser console for specific error messages

**Issue**: Form not submitting
- **Solution**:
  - Ensure all required fields are filled (First Name, Last Name, Email, Phone)
  - Open browser DevTools (F12) and check Console tab for errors

**Issue**: Styles not loading
- **Solution**:
  - Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
  - Restart development server: `npm run dev`

**Issue**: Dependencies installation fails
- **Solution**:
  ```bash
  rm -rf node_modules package-lock.json
  npm cache clean --force
  npm install
  ```

**Issue**: Port 5173 already in use
- **Solution**: Vite will automatically use the next available port

---

## 📱 Browser Support

- **Chrome/Edge**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile (latest)

---

## 📚 Usage Guide

### Adding a Contact

1. Scroll to the form section at the top
2. Fill in the required fields:
   - First Name
   - Last Name
   - Email
   - Phone Number
3. Optionally add:
   - Address
   - Password
4. Click the "Add Contact" button
5. The contact will appear in the grid below

### Editing a Contact

1. Locate the contact in the grid
2. Click the edit button (✎) on the contact card
3. The form will auto-fill with the contact's current data
4. Modify the fields as needed
5. Click "Update Contact" to save changes

### Deleting a Contact

1. Find the contact you want to delete
2. Click the delete button (🗑) on the contact card
3. Confirm the deletion in the popup dialog
4. The contact will be removed from the list

### Searching Contacts

1. Use the search bar at the top of the page
2. Type any part of the contact's:
   - First name
   - Last name
   - Email address
   - Phone number
3. Results filter in real-time as you type
4. Clear the search to view all contacts

---

## 🔄 Workflow

```
User Action (Frontend)
    ↓
Form Validation (Client-side)
    ↓
HTTP Request (Fetch API)
    ↓
Backend API (Spring Boot Controller)
    ↓
Business Logic (Service Layer)
    ↓
Database Operation (JPA Repository)
    ↓
Response (JSON)
    ↓
Frontend State Update
    ↓
UI Re-render
```

---

## 🚢 Deployment

### Backend Deployment

1. Build the production package:
```bash
cd contact-backend
./mvnw clean package
```

2. The JAR file will be created in `target/` directory

3. Deploy to your server:
```bash
java -jar contact-backend-0.0.1-SNAPSHOT.jar
```

### Frontend Deployment

1. Build the production bundle:
```bash
cd contact-frontend
npm run build
```

2. The optimized files will be in the `dist/` directory

3. Deploy to your hosting service:
   - **Netlify**: Drag and drop the `dist` folder
   - **Vercel**: Connect your GitHub repository
   - **Traditional Hosting**: Upload `dist` folder to your web server
   - **GitHub Pages**: Use `gh-pages` package

4. Update the API URL in your code to point to your production backend

---

## 🔐 Security Considerations

- ⚠️ Disable CORS in production and only allow specific origins
- ⚠️ Use HTTPS in production
- ⚠️ Implement proper authentication and authorization
- ⚠️ Validate all input on both client and server side
- ⚠️ Never commit `.env` files with sensitive information
- ⚠️ Use environment variables for configuration in production

---

## 📊 Performance Optimization

### Frontend Optimizations
- CSS animations for smooth UX
- Responsive grid layout with auto-fill and minmax
- Efficient state management with React hooks
- Client-side search filtering
- Proper error boundaries and loading states
- Code splitting and lazy loading

### Backend Optimizations
- Spring Data JPA for efficient database queries
- Connection pooling for MySQL
- Proper indexing on database tables
- Response compression
- Caching strategies

---

## 🚦 Future Enhancements

- [ ] User authentication and login system
- [ ] Contact categories and groups
- [ ] Export contacts to CSV/PDF
- [ ] Import contacts from CSV/Excel
- [ ] Contact profile pictures
- [ ] Advanced filtering options
- [ ] Dark mode support
- [ ] Contact notes and details
- [ ] Favorites/starred contacts
- [ ] Backup and restore functionality
- [ ] Multi-language support
- [ ] Mobile app (React Native)

---

## 📖 Additional Documentation

- **Frontend Details**: See [contact-frontend/README.md](./contact-frontend/README.md)
- **Quick Start Guide**: See [contact-frontend/QUICKSTART.md](./contact-frontend/QUICKSTART.md)
- **Environment Setup**: Check [contact-frontend/.env.example](./contact-frontend/.env.example)

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Author

**Sai Krishna Auggi**
- GitHub: [@saikrishnauggi](https://github.com/saikrishnauggi)
- Repository: [contact-book-application](https://github.com/saikrishnauggi/contact-book-application)

---

## 💬 Support & Questions

For issues, questions, or suggestions:
1. Check the [Troubleshooting](#troubleshooting) section
2. Review existing [GitHub Issues](https://github.com/saikrishnauggi/contact-book-application/issues)
3. Create a new issue with detailed information

---

## 🙏 Acknowledgments

- Spring Boot and Spring Data JPA for excellent backend framework
- React and Vite for modern frontend development
- The open-source community for various libraries and tools

---

**Last Updated**: June 2025  
**Version**: 1.0.0

---

Made with ❤️ by [Sai Krishna Auggi](https://github.com/saikrishnauggi)
