import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

// Import components
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import BlogDetail from './pages/BlogDetail';
import Cost from './pages/Cost';
import Events from './pages/Events';
import Home from './pages/Home';
import HotelDetail from './pages/HotelDetail';
import Hotels from './pages/Hotels';
import Location from './pages/Location';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Tickets from './pages/Tickets';

function App() {
  return (
    <Router basename="/Smolworld">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/location" element={<Location />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:eventId" element={<Events />} />
        <Route path="/destination/:destinationId" element={<Location />} />
        <Route path="/cost" element={<Cost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/hotel/:id" element={<HotelDetail />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
