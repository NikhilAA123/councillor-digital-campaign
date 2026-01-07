 feature/voter-crm-update
 feature/voter-crm-update

 dev
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

 dev
 dev
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
 feature/voter-crm-update


 dev
 feature/volunteer-app-init
function App() {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>Volunteer App</h2>
      <p>Digital Campaign Platform</p>
    </div>
  );
}

export default App;

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
 dev
 feature/localization
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
 dev

 feature/voter-crm-update

  );
}

export default App;

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
 dev
  );
 dev
}

export default App;

}

export default App;

 feature/voter-crm-update
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


 dev
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
 feature/voter-crm-update
 main

 dev
