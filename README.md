# 🔐 SecureVault

> A modern, secure, and premium password manager application designed to help users store, manage, generate, and monitor their passwords with confidence.

SecureVault is a full-stack password manager application built with a premium dark-themed interface, reusable React components, Tailwind CSS, and a Node.js/Express backend connected to MongoDB.

The project currently focuses on building a polished authentication experience, password management interface, and the foundation for secure frontend-to-backend communication.

---

## ✨ Features

### 🔐 Authentication

SecureVault currently includes a complete authentication UI flow with:

* Splash screen
* Welcome screen
* Login page
* Registration page
* Forgot password page
* OTP verification page
* Password reset page
* 404 Not Found page
* Password strength feedback
* Show/hide password functionality
* Dark mode control
* Form validation states
* Loading states
* Error handling states
* Responsive authentication layouts

### 🔑 Password Management Interface

The password manager dashboard UI includes:

* Password list
* Password cards
* Password table
* Add password form
* Password categories
* Favorite passwords
* Password visibility controls
* Password generation
* Search interface
* Sorting controls
* Category filtering
* List and grid views
* Pagination
* Password statistics
* Responsive password management layouts

### 🛡️ Security-Focused UI

The interface is designed around security-focused experiences including:

* Password strength feedback
* Secure password generation
* Authentication verification
* OTP-based password recovery
* Protected password visibility
* Security-focused authentication messaging
* Session and authentication architecture planned for backend integration

---

## 🎨 Design System

SecureVault follows a premium dark design language across authentication and application screens.

### Core Design Principles

* Premium dark-themed interface
* Clean and minimal visual hierarchy
* No unnecessary gradients
* Consistent spacing system
* Reusable UI components
* Token-based design system
* Consistent borders and border-radius
* Subtle shadows
* Smooth and purposeful animations
* Responsive-first layouts
* Security-focused visual language

### Visual Style

The application uses a dark interface with subtle surface differences rather than pure black backgrounds.

Common visual patterns include:

* Dark background surfaces
* Elevated cards
* Subtle borders
* Indigo and violet accent colors
* Muted secondary text
* Glass-like modal overlays
* Subtle backdrop blur
* Smooth hover and focus states

The design system is built around reusable background, text, border, radius, shadow, and spacing tokens.

---

## 🧩 Application Architecture

SecureVault is structured around reusable application areas rather than creating completely independent UI for every screen.

### 1. Authentication

Used for authentication-related screens.

Current authentication pages include:

* Splash
* Welcome
* Login
* Register
* Forgot Password
* Verify OTP
* Reset Password
* Not Found

The authentication experience uses shared components such as:

* AuthCard
* AuthFeature
* AuthFooter
* PasswordStrength
* DarkModeBtn

### 2. Dashboard

The dashboard provides the main password management interface.

Current UI components include:

* Navbar
* Sidebar
* StatsCard
* PasswordTable
* PasswordRow
* PasswordCard
* FilterBar
* Pagination
* Modal
* AddPasswordForm

### 3. Backend

The backend is built with Node.js and Express and currently provides the foundation for API development.

Current backend setup includes:

* Express application
* Server entry point
* Environment configuration
* MongoDB connection
* CORS configuration
* Backend routes structure

The backend is being developed alongside the frontend authentication flow.

---

## 📱 Responsive Design

SecureVault is designed to provide a consistent experience across different screen sizes.

### Desktop

* Full authentication layouts
* Sidebar navigation
* Password table views
* Grid views
* Centered modals
* Full-width dashboard layouts

### Laptop

* Compact dashboard spacing
* Responsive password tables
* Flexible authentication layouts

### Tablet

* Responsive navigation
* Adaptable password layouts
* Flexible form and card widths

### Mobile

* Responsive authentication screens
* Mobile-friendly password cards
* Flexible dashboard layouts
* Responsive forms and controls

Responsive behavior is an important part of the project, especially for authentication forms and password management components.

---

## 🧱 Core UI Components

The project is built using reusable components to maintain consistency across the application.

### Authentication Components

* AuthCard
* AuthFeature
* AuthFooter
* PasswordStrength
* SocialLogin
* DarkModeBtn

### Dashboard Components

* StatsCard
* PasswordTable
* PasswordRow
* PasswordCard
* FilterBar
* Pagination

### Form Components

* AddPasswordForm
* Email input
* Password input
* OTP input
* Password strength indicator
* Password visibility controls

### Layout Components

* Navbar
* Sidebar
* Authentication layouts
* Dashboard layouts

### Feedback & Overlays

* Modal
* Error states
* Loading states
* Success states
* Form validation feedback

The component architecture is designed to make screens reusable, consistent, and easier to maintain.

---

## 🔌 Frontend & Backend Integration

SecureVault has started integrating the React frontend with the Node.js/Express backend.

### Frontend Services

The frontend includes a dedicated services layer:

```text
client/
└── src/
    └── services/
        ├── api.js
        └── authServices.js
```

### API Client

Axios is used for HTTP communication between the frontend and backend.

The API service layer is responsible for providing a centralized place for backend requests.

### Authentication Services

`authServices.js` provides the foundation for connecting authentication-related frontend actions with backend API endpoints.

### Backend CORS

The Express backend is configured with CORS to allow communication between the frontend development server and backend API.

Frontend and backend integration is currently in progress.

---

## 📂 Project Structure

```text
SecureVault/
│
├── client/
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   │   ├── images/
│   │   │   └── logos/
│   │   │
│   │   ├── components/
│   │   │   ├── auth/
│   │   │   ├── dashboard/
│   │   │   ├── forms/
│   │   │   ├── layout/
│   │   │   └── ui/
│   │   │
│   │   ├── pages/
│   │   │   └── auth/
│   │   │
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   └── authServices.js
│   │   │
│   │   └── styles/
│   │
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   │   ├── config.js
│   │   │   └── db.js
│   │   │
│   │   ├── routes/
│   │   │
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── .gitignore
│   └── package.json
│
├── README.md
└── ...
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd SecureVault
```

### 2. Install Frontend Dependencies

```bash
cd client
npm install
```

### 3. Start the Frontend

```bash
npm run dev
```

### 4. Install Backend Dependencies

Open another terminal:

```bash
cd server
npm install
```

### 5. Start the Backend

```bash
npm run dev
```

The frontend and backend can then run independently during development.

---

## 🛠️ Tech Stack

### Frontend

* **React** — User interface
* **Vite** — Development and build tooling
* **Tailwind CSS v4** — Styling and design system
* **React Router** — Client-side navigation
* **Lucide React** — Icons
* **Axios** — Frontend API communication

### Backend

* **Node.js** — Runtime environment
* **Express.js** — Backend framework
* **MongoDB** — Database
* **Mongoose** — MongoDB object modeling
* **CORS** — Frontend/backend communication
* **dotenv** — Environment configuration

---

## 🔌 API Integration

The backend API is currently being developed alongside the frontend authentication system.

### Authentication

The authentication architecture is being built around endpoints for:

```text
POST /auth/register
POST /auth/login
POST /auth/forgot-password
POST /auth/verify-otp
POST /auth/reset-password
POST /auth/logout
```

The exact endpoint structure may evolve as the backend controllers, models, and authentication logic are implemented.

### Password Management

The planned password management API includes operations such as:

```text
GET    /passwords
GET    /passwords/:id
POST   /passwords
PUT    /passwords/:id
DELETE /passwords/:id
```

These endpoints will be implemented as the backend password management system is developed.

---

## 🔐 Authentication Architecture

The authentication system is being designed with backend security as the source of truth.

The planned authentication architecture includes:

* Password hashing on the backend
* JWT access tokens
* Refresh tokens
* Session management
* Secure authentication cookies
* Protected API routes
* OTP-based password recovery
* Backend validation
* Authentication middleware
* Logout and session invalidation

Sensitive authentication operations are intentionally handled by the backend rather than relying on frontend-only security.

---

## 🎯 Design & Development Principles

```text
Tokens → Components → Patterns → Screens → API Integration
```

SecureVault follows a component-first development workflow:

1. Define reusable design tokens
2. Build reusable UI components
3. Create shared interaction patterns
4. Build application layouts
5. Assemble complete screens
6. Connect frontend services to backend APIs
7. Implement backend authentication and data operations

This approach keeps the interface consistent while allowing the frontend and backend to evolve independently.

---

## 📈 Current Development Status

### ✅ Completed

* React frontend setup
* Vite setup
* Tailwind CSS v4 setup
* Premium dark UI system
* Authentication UI
* Login page
* Registration page
* Forgot Password page
* OTP verification page
* Reset Password page
* Welcome page
* Splash screen
* 404 Not Found page
* Password strength component
* Dashboard UI foundation
* Password table and card components
* Add Password form
* Password generator UI
* Filtering and sorting UI
* Pagination
* Modal system
* Navbar and Sidebar
* Backend server setup
* Express application setup
* MongoDB connection setup
* Environment configuration
* Backend CORS setup
* Backend routes structure
* Axios installation
* Frontend API service
* Authentication service layer

### 🚧 In Progress

* Frontend authentication API integration
* Backend authentication routes
* Authentication controllers
* Authentication models
* JWT authentication
* Refresh token flow
* Session management
* Registration API
* Login API
* Forgot password API
* OTP verification API
* Password reset API

### 🗺️ Planned

* Complete password CRUD API
* Secure password storage
* Password encryption
* Password history
* Favorites persistence
* Categories and tags
* Search and filtering API
* Security dashboard
* Security score
* Reused password detection
* Weak password detection
* Compromised password detection
* Device and session management
* Profile management
* Import/export
* Trash and recovery
* Production deployment
* Additional security hardening

---

## 🔒 Security Notice

SecureVault is being developed as a password management application.

Security-sensitive functionality must be handled by the backend and should not rely on frontend protection alone.

Before production use, the application should include:

* Secure password hashing
* Encrypted sensitive data
* Secure JWT handling
* Refresh token protection
* Protected API routes
* Secure cookies
* Input validation
* Rate limiting
* Session management
* Proper CORS configuration
* HTTPS
* Security headers
* Secure database access

**Never rely on frontend UI alone to secure sensitive password data.**

---

## 📸 Screenshots

The project currently includes authentication and dashboard interfaces such as:

* Splash Screen
* Welcome Screen
* Login
* Registration
* Forgot Password
* OTP Verification
* Reset Password
* Dashboard
* Password List
* Add Password
* Password Generator
* Responsive layouts

Screenshots can be added here as the project continues to evolve.

---

## 🤝 Contributing

Contributions are welcome.

When contributing:

1. Keep the existing design system consistent.
2. Reuse existing components whenever possible.
3. Avoid unnecessary hardcoded styling values.
4. Follow the existing client/server folder structure.
5. Keep frontend and backend responsibilities separated.
6. Maintain responsive behavior.
7. Follow the existing authentication architecture.
8. Test component and API states before submitting changes.

---

## 📄 License

This project is currently intended for private or portfolio use unless a license is added to the repository.

---

<div align="center">

### 🔐 SecureVault

**Secure your digital life. Simplify your passwords. Stay protected.**

Built with a premium, security-focused design system.

</div>
