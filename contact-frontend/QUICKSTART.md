# Quick Start Guide

## Getting Started with Contact Book Frontend

### Step 1: Setup Backend
First, ensure your Spring Boot backend is running:
```bash
cd contact-backend
./mvnw spring-boot:run
```
The backend should be accessible at `http://localhost:8080`

### Step 2: Install Frontend Dependencies
```bash
cd contact-frontend
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`

### Step 4: Start Using the App
- Create contacts using the form
- View all contacts in the grid below
- Search, edit, or delete contacts as needed

## Troubleshooting

### Issue: "Failed to fetch contacts" error
**Solution**: 
- Check if backend is running on `http://localhost:8080`
- Verify backend CORS configuration allows requests from `http://localhost:5173`

### Issue: Form not submitting
**Solution**:
- Ensure all required fields (First Name, Last Name, Email, Phone) are filled
- Check browser console for API errors

### Issue: Styles not loading
**Solution**:
- Clear browser cache
- Restart development server with `npm run dev`

### Issue: Dependencies installation fails
**Solution**:
```bash
rm -rf node_modules package-lock.json
npm install
```

## Backend CORS Configuration

Make sure your Spring Boot backend has CORS configured properly. Update `CorsConfig.java` if needed:

```java
@Configuration
public class CorsConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/contacts/**")
                    .allowedOrigins("http://localhost:5173")
                    .allowedMethods("GET", "POST", "PUT", "DELETE")
                    .allowedHeaders("*")
                    .allowCredentials(true);
            }
        };
    }
}
```

## Useful Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## File Locations

- **App Component**: `src/App.jsx`
- **Styling**: `src/App.css` and `src/index.css`
- **Configuration**: `vite.config.js`
- **HTML Template**: `index.html`

## API Integration Details

The frontend connects to these backend endpoints:

```
GET    /contacts              - Fetch all contacts
POST   /contacts/create       - Create a new contact
GET    /contacts/retrieve/{id} - Get a contact by ID
PUT    /contacts/update/{id}  - Update a contact
DELETE /contacts/delete/{id}  - Delete a contact
```

## Contact Data Structure

```javascript
{
  id: number,
  firstname: string,
  lastname: string,
  email: string,
  phone: string,
  address: string,
  password: string
}
```

## Development Tips

1. **Hot Module Replacement**: Changes to files will automatically reload the browser
2. **Developer Tools**: Open browser DevTools (F12) to see network requests and errors
3. **Component Structure**: All logic is in the single `App.jsx` component for simplicity
4. **State Management**: Uses React hooks (useState, useEffect) for state management
5. **API Calls**: Uses Fetch API for HTTP requests

## Performance Optimization

The frontend includes:
- CSS animations and transitions for smooth UX
- Responsive grid layout (auto-fill, minmax)
- Efficient state management with React hooks
- Proper error boundaries and loading states
- Search filtering on the client side

## Deployment

For production deployment:

1. Build the application:
```bash
npm run build
```

2. The `dist` folder contains the production build

3. Deploy the `dist` folder to your web server:
   - Netlify: Drag and drop the `dist` folder
   - Vercel: Connect your repository
   - Traditional hosting: Upload `dist` to your server

4. Update the API URL in your frontend code to point to your production backend

---

**Need Help?** Check the main [README.md](./README.md) file for more details.
