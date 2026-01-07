 feature/admin-dashboard

 feature/voter-crm-update

 dev
 main
 main
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { LanguageProvider } from "./context/LanguageContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import VoterForm from "./components/VoterForm";
import ProtectedRoute from "./components/ProtectedRoute";
import InstallPrompt from "./components/InstallPrompt";

function App() {
feature/admin-dashboard
  return (

 feature/voter-crm-update

  return (

 dev
 feature/volunteer-app-init
function App() {
 main
  return (
    <LanguageProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/add-voter"
              element={
                <ProtectedRoute>
                  <VoterForm />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          </Routes>
          <InstallPrompt />
        </Router>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;
 feature/voter-crm-update


 hotfix/firebase-config-cleanup

 feature/data-sync
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
 main

 dev
 feature/localization
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { LanguageProvider } from "./context/LanguageContext";


 main
 dev
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

 feature/offline-voter-form
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

 main
 main
 dev
 dev

 main
 dev
 dev

 main
 main
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import VoterForm from "./components/VoterForm";
import ProtectedRoute from "./components/ProtectedRoute";
 dev

 feature/data-sync

function App() {
  return (

 main
import InstallPrompt from "./components/InstallPrompt";

function App() {
 dev

 feature/offline-voter-form
 main
  return (
 feature/localization
 main
 main
    <LanguageProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/add-voter"
              element={
                <ProtectedRoute>
                  <VoterForm />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          </Routes>
          <InstallPrompt />
        </Router>
      </AuthProvider>
    </LanguageProvider>
feature/admin-dashboard

 dev

 main
  );
}

export default App;
 feature/admin-dashboard


 dev
 hotfix/firebase-config-cleanup


 main
 main
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-voter"
            element={
              <ProtectedRoute>
                <VoterForm />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
 main
  );
 dev
}

export default App;

}

export default App;

  return <Login />;
}

export default App;
 dev

 feature/data-sync


 main
 main
 dev
 dev

 main
 main
 dev
 dev

 main
 dev
 dev
 main
 main
 main
