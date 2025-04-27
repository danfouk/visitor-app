# Visitors Ticketing System: Application Structure

## Overview
This document outlines the comprehensive application structure for a Visitors Ticketing System, including directory organization, key files, database schema, and component relationships.

## Directory Structure

### Root-Level Organization
```
visitors-ticketing-system/
├── frontend/                # Front-end application
├── backend/                 # Back-end API and services
├── database/                # Database migrations and schemas
├── docs/                    # Documentation
├── deployment/              # Deployment configurations
└── README.md                # Project overview
```

### Frontend Structure
```
frontend/
├── public/                  # Static public assets
│   ├── images/              # Image assets
│   ├── fonts/               # Font files
│   ├── locales/             # Internationalization files
│   ├── favicon.ico          # Site favicon
│   └── index.html           # Main HTML entry point
├── src/                     # Source code
│   ├── assets/              # Static assets
│   ├── components/          # Reusable UI components
│   │   ├── common/          # Shared components
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Table.jsx
│   │   │   └── ...
│   │   ├── layout/          # Layout components
│   │   │   ├── Header.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ...
│   │   ├── visitor/         # Visitor-related components
│   │   │   ├── VisitorForm.jsx
│   │   │   ├── VisitorCard.jsx
│   │   │   ├── VisitorTable.jsx
│   │   │   └── ...
│   │   ├── ticket/          # Ticket-related components
│   │   │   ├── TicketView.jsx
│   │   │   ├── QRCode.jsx
│   │   │   ├── PrintTicket.jsx
│   │   │   └── ...
│   │   ├── host/            # Host-related components
│   │   │   ├── HostDashboard.jsx
│   │   │   ├── VisitorRequest.jsx
│   │   │   └── ...
│   │   └── admin/           # Admin components
│   │       ├── AdminDashboard.jsx
│   │       ├── UserManagement.jsx
│   │       └── ...
│   ├── pages/               # Full page components
│   │   ├── auth/            # Authentication pages
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── ForgotPassword.jsx
│   │   ├── visitor/         # Visitor pages
│   │   │   ├── RegistrationPage.jsx
│   │   │   ├── CheckInPage.jsx
│   │   │   └── TicketPage.jsx
│   │   ├── reception/       # Reception pages
│   │   │   ├── DashboardPage.jsx
│   │   │   ├── VisitorProcessingPage.jsx
│   │   │   └── CheckInOutPage.jsx
│   │   ├── host/            # Host pages
│   │   │   ├── DashboardPage.jsx
│   │   │   ├── InvitePage.jsx
│   │   │   └── VisitorHistoryPage.jsx
│   │   └── admin/           # Admin pages
│   │       ├── DashboardPage.jsx
│   │       ├── ReportsPage.jsx
│   │       ├── SettingsPage.jsx
│   │       └── UserManagementPage.jsx
│   ├── services/            # API services
│   │   ├── api.js           # API configuration
│   │   ├── authService.js   # Authentication service
│   │   ├── visitorService.js # Visitor API calls
│   │   ├── ticketService.js # Ticket API calls
│   │   ├── hostService.js   # Host API calls
│   │   └── reportService.js # Reporting API calls
│   ├── hooks/               # Custom React hooks
│   │   ├── useAuth.js       # Authentication hook
│   │   ├── useVisitor.js    # Visitor data hook
│   │   └── useNotification.js # Notifications hook
│   ├── context/             # React context providers
│   │   ├── AuthContext.jsx  # Authentication context
│   │   ├── ThemeContext.jsx # UI theme context
│   │   └── NotificationContext.jsx # Notification context
│   ├── utils/               # Utility functions
│   │   ├── dateFormatter.js # Date formatting utilities
│   │   ├── validators.js    # Form validation functions
│   │   ├── printers.js      # Printing utilities
│   │   └── qrGenerator.js   # QR code generation
│   ├── routes/              # Routing configuration
│   │   ├── index.js         # Main router
│   │   ├── PrivateRoute.jsx # Protected route component
│   │   ├── AdminRoute.jsx   # Admin-only route
│   │   └── PublicRoute.jsx  # Public access routes
│   ├── constants/           # Application constants
│   ├── App.jsx              # Main App component
│   └── index.js             # Application entry point
├── .env                     # Environment variables
├── package.json             # Dependencies and scripts
└── README.md                # Frontend documentation
```

### Backend Structure
```
backend/
├── src/
│   ├── api/                 # API endpoints
│   │   ├── routes/          # Route definitions
│   │   │   ├── auth.js      # Authentication routes
│   │   │   ├── visitors.js  # Visitor management routes
│   │   │   ├── tickets.js   # Ticketing routes
│   │   │   ├── hosts.js     # Host management routes
│   │   │   ├── admin.js     # Admin routes
│   │   │   └── reports.js   # Reporting routes
│   │   └── controllers/     # Route handlers
│   │       ├── authController.js
│   │       ├── visitorController.js
│   │       ├── ticketController.js
│   │       ├── hostController.js
│   │       ├── adminController.js
│   │       └── reportController.js
│   ├── services/            # Business logic
│   │   ├── authService.js   # Authentication logic
│   │   ├── visitorService.js # Visitor management
│   │   ├── ticketService.js # Ticket generation & validation
│   │   ├── notificationService.js # Email/SMS notifications
│   │   ├── reportService.js # Report generation
│   │   └── integrationService.js # External system integration
│   ├── models/              # Data models
│   │   ├── User.js          # User model
│   │   ├── Visitor.js       # Visitor model
│   │   ├── Visit.js         # Visit record model
│   │   ├── Ticket.js        # Ticket model
│   │   ├── Host.js          # Host model
│   │   └── Location.js      # Location/facility model
│   ├── middleware/          # Custom middleware
│   │   ├── auth.js          # Authentication middleware
│   │   ├── validation.js    # Request validation
│   │   ├── errorHandler.js  # Error handling middleware
│   │   ├── logger.js        # Logging middleware
│   │   └── rateLimiter.js   # API rate limiting
│   ├── utils/               # Utility functions
│   │   ├── logger.js        # Logging utility
│   │   ├── emailSender.js   # Email functionality
│   │   ├── smsSender.js     # SMS functionality
│   │   ├── qrGenerator.js   # QR code generation
│   │   ├── pdfGenerator.js  # PDF generation for tickets
│   │   └── validators.js    # Data validation helpers
│   ├── config/              # Configuration
│   │   ├── database.js      # Database configuration
│   │   ├── auth.js          # Authentication config
│   │   ├── email.js         # Email service config
│   │   ├── sms.js           # SMS service config
│   │   └── app.js           # Application config
│   ├── app.js               # Express application setup
│   └── server.js            # Server entry point
├── tests/                   # Test files
│   ├── unit/                # Unit tests
│   ├── integration/         # Integration tests
│   └── fixtures/            # Test fixtures
├── .env                     # Environment variables
├── package.json             # Dependencies and scripts
└── README.md                # Backend documentation
```

### Database Structure
```
database/
├── migrations/              # Database migrations
│   ├── 001_initial_schema.sql
│   ├── 002_add_user_roles.sql
│   └── ...
├── seeds/                   # Seed data
│   ├── 001_admin_users.sql
│   ├── 002_locations.sql
│   └── ...
├── scripts/                 # Database scripts
│   ├── backup.sh            # Backup script
│   └── restore.sh           # Restore script
└── README.md                # Database documentation
```

### Documentation Structure
```
docs/
├── api/                     # API documentation
│   ├── auth.md              # Authentication endpoints
│   ├── visitors.md          # Visitor endpoints
│   ├── tickets.md           # Ticket endpoints
│   └── ...
├── guides/                  # User guides
│   ├── admin-guide.md       # Administrator guide
│   ├── reception-guide.md   # Reception staff guide
│   ├── host-guide.md        # Host user guide
│   └── visitor-guide.md     # Visitor portal guide
├── development/             # Development documentation
│   ├── setup.md             # Setup instructions
│   ├── coding-standards.md  # Code standards
│   ├── testing.md           # Testing guide
│   └── deployment.md        # Deployment procedures
├── architecture/            # Architecture documentation
│   ├── overview.md          # System overview
│   ├── data-flow.md         # Data flow diagrams
│   └── security.md          # Security architecture
└── README.md                # Documentation index
```

### Deployment Structure
```
deployment/
├── docker/                  # Docker configurations
│   ├── frontend/            # Frontend Docker config
│   │   └── Dockerfile
│   ├── backend/             # Backend Docker config
│   │   └── Dockerfile
│   ├── nginx/               # Web server config
│   │   └── nginx.conf
│   └── docker-compose.yml   # Compose configuration
├── kubernetes/              # Kubernetes configs (if applicable)
│   ├── frontend.yaml
│   ├── backend.yaml
│   ├── database.yaml
│   └── ingress.yaml
├── scripts/                 # Deployment scripts
│   ├── deploy.sh            # Deployment script
│   ├── rollback.sh          # Rollback script
│   └── health-check.sh      # Health check script
└── README.md                # Deployment instructions
```

## Database Schema

### Key Tables

#### users
```
users
├── id                  # Primary key
├── username            # Login username
├── email               # User email
├── password_hash       # Hashed password
├── role                # User role (admin, reception, host, security)
├── first_name          # First name
├── last_name           # Last name
├── department          # Department
├── phone_number        # Contact number
├── is_active           # Account status
├── last_login          # Last login timestamp
├── created_at          # Creation timestamp
└── updated_at          # Update timestamp
```

#### visitors
```
visitors
├── id                  # Primary key
├── first_name          # First name
├── last_name           # Last name
├── email               # Email address
├── phone               # Phone number
├── company             # Company name
├── id_type             # ID document type
├── id_number           # ID document number
├── photo_url           # Profile photo URL/path
├── notes               # Additional notes
├── created_at          # Creation timestamp
└── updated_at          # Update timestamp
```

#### visits
```
visits
├── id                  # Primary key
├── visitor_id          # Foreign key to visitors
├── host_id             # Foreign key to users (host)
├── purpose             # Visit purpose
├── status              # Status (scheduled, active, completed, canceled)
├── scheduled_start     # Scheduled start time
├── scheduled_end       # Scheduled end time
├── check_in_time       # Actual check-in timestamp
├── check_out_time      # Actual check-out timestamp
├── location_id         # Foreign key to locations
├── notes               # Visit notes
├── created_at          # Creation timestamp
└── updated_at          # Update timestamp
```

#### tickets
```
tickets
├── id                  # Primary key
├── visit_id            # Foreign key to visits
├── ticket_number       # Unique ticket identifier
├── qr_code             # QR code data/URL
├── status              # Status (active, used, expired, revoked)
├── valid_from          # Validity start time
├── valid_until         # Validity end time
├── issued_by           # User ID who issued the ticket
├── created_at          # Creation timestamp
└── updated_at          # Update timestamp
```

#### locations
```
locations
├── id                  # Primary key
├── name                # Location name
├── description         # Location description
├── address             # Physical address
├── capacity            # Maximum capacity
├── security_level      # Security level required
├── parent_location_id  # Parent location (for hierarchical structures)
├── created_at          # Creation timestamp
└── updated_at          # Update timestamp
```

#### access_permissions
```
access_permissions
├── id                  # Primary key
├── ticket_id           # Foreign key to tickets
├── location_id         # Foreign key to locations
├── created_at          # Creation timestamp
└── updated_at          # Update timestamp
```

#### notifications
```
notifications
├── id                  # Primary key
├── user_id             # Recipient user ID
├── visit_id            # Related visit ID
├── type                # Notification type
├── message             # Notification message
├── is_read             # Read status
├── sent_via            # Delivery method (email, sms, app)
├── sent_at             # Sent timestamp
├── created_at          # Creation timestamp
└── updated_at          # Update timestamp
```

## API Endpoints

### Authentication Endpoints
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh` - Refresh token
- `POST /api/auth/password/reset` - Password reset request
- `PUT /api/auth/password/update` - Update password

### Visitor Endpoints
- `GET /api/visitors` - List visitors
- `GET /api/visitors/:id` - Get visitor details
- `POST /api/visitors` - Create new visitor
- `PUT /api/visitors/:id` - Update visitor
- `DELETE /api/visitors/:id` - Delete visitor

### Visit Endpoints
- `GET /api/visits` - List visits
- `GET /api/visits/:id` - Get visit details
- `POST /api/visits` - Create new visit
- `PUT /api/visits/:id` - Update visit
- `PUT /api/visits/:id/check-in` - Check in visitor
- `PUT /api/visits/:id/check-out` - Check out visitor
- `DELETE /api/visits/:id` - Cancel visit

### Ticket Endpoints
- `GET /api/tickets` - List tickets
- `GET /api/tickets/:id` - Get ticket details
- `GET /api/tickets/:id/validate` - Validate ticket
- `POST /api/tickets` - Generate new ticket
- `PUT /api/tickets/:id` - Update ticket
- `DELETE /api/tickets/:id` - Revoke ticket

### Host Endpoints
- `GET /api/hosts` - List hosts
- `GET /api/hosts/:id` - Get host details
- `GET /api/hosts/:id/visits` - Get host's visits
- `POST /api/hosts/:id/invite` - Send visitor invitation

### Admin Endpoints
- `GET /api/admin/users` - List users
- `POST /api/admin/users` - Create user
- `PUT /api/admin/users/:id` - Update user
- `DELETE /api/admin/users/:id` - Delete user
- `GET /api/admin/settings` - Get system settings
- `PUT /api/admin/settings` - Update system settings

### Reporting Endpoints
- `GET /api/reports/visitors` - Visitor reports
- `GET /api/reports/visits` - Visit reports
- `GET /api/reports/occupancy` - Occupancy reports
- `GET /api/reports/security` - Security reports
- `POST /api/reports/export` - Export report data

## Component Dependencies

### Frontend Dependencies
- React.js - UI library
- Redux/Context API - State management
- React Router - Routing
- Axios - API communication
- Material-UI/Tailwind - UI components
- React-hook-form - Form handling
- i18next - Internationalization
- Chart.js - Data visualization
- html2pdf.js - PDF generation
- qrcode.react - QR code generation

### Backend Dependencies
- Express.js - Web framework
- Sequelize/Mongoose - ORM/ODM
- Passport.js - Authentication
- JSON Web Token - Authentication tokens
- Joi/Yup - Validation
- Nodemailer - Email sending
- Twilio/Messagebird - SMS notifications
- Winston/Morgan - Logging
- Multer - File uploads
- PDFKit - PDF generation

## Development Tools

### Build Tools
- Webpack/Vite - Frontend bundling
- Babel - JavaScript transpilation
- ESLint - Code linting
- Prettier - Code formatting
- Jest - Testing framework

### Development Environments
- Development - Local development environment
- Staging - Testing environment
- Production - Live environment

### CI/CD Pipeline
- Git workflow
- Automated testing
- Linting and code quality checks
- Build process
- Deployment stages

## Security Implementation

### Authentication
- JWT-based authentication
- Password hashing with bcrypt
- Token refresh mechanism
- Account lockouts after failed attempts

### Authorization
- Role-based access control
- Permission checks at API level
- Row-level security in database

### Data Protection
- HTTPS for all communications
- Data encryption at rest
- Input sanitization
- CSRF protection
- Rate limiting

## Configuration Management

### Environment Variables
- Database connection strings
- API keys for third-party services
- Authentication secrets
- Feature flags
- Logging levels

### Application Settings
- Notification preferences
- Security policy configurations
- System appearance settings
- Integration configurations

---

This comprehensive application structure provides a solid foundation for building a robust Visitors Ticketing System. The modular organization allows for scalable development and clear separation of concerns, while the detailed API and database structure ensures data integrity and efficient operations.
