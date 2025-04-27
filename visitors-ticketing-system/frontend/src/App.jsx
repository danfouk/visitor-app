import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// Import contexts
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { NotificationProvider } from './context/NotificationContext';
// Import layout components
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
// Import the main router component
import AppRoutes from './routes';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <NotificationProvider>
          <Router>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
              <Header />
              <div style={{ display: 'flex', flexGrow: 1 }}>
                {/* Sidebar might be conditionally rendered based on auth/route */} 
                <Sidebar />
                <main style={{ flexGrow: 1, padding: '20px' }}>
                  {/* Render the main application routes */}
                  <AppRoutes />
                </main>
              </div>
              <Footer />
            </div>
          </Router>
        </NotificationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
