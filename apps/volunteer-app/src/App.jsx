 dev
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

 feature/offline-voter-form
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

 main
 main
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import VoterForm from "./components/VoterForm";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
 dev

 feature/offline-voter-form
 main
  return (
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
  );
 dev
}

export default App;

}

export default App;

  return <Login />;
}

export default App;

 main
 main
