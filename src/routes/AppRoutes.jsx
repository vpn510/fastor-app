import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import OTP from '../pages/OTP';
import Dashboard from '../pages/Dashboard';
import RestaurantDetail from '../pages/RestaurantDetail';
import { isLoggedIn } from '../utils/auth';

const AppRoutes = () => {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/otp" element={<OTP />} />
        <Route
          path="/dashboard"
          element={isLoggedIn() ? <Dashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/restaurant/:id"
          element={isLoggedIn() ? <RestaurantDetail /> : <Navigate to="/" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;