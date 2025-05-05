import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Tickets from './pages/Tickets';
import Teams from './pages/Teams';
import Analytics from './pages/Analytics';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/tickets" element={<Tickets />} />
    <Route path="/teams" element={<Teams />} />
    <Route path="/analytics" element={<Analytics />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
);

export default AppRoutes;
