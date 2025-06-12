import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

// Import components
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import BlogPost from './pages/BlogPost';
import Cost from './pages/Cost';
import Events from './pages/Events';
import Home from './pages/Home';
import HotelDetail from './pages/HotelDetail';
import Hotels from './pages/Hotels';
import Location from './pages/Location';
import Login from './pages/Login';
import Packages from './pages/Packages';
import Register from './pages/Register';
import Tickets from './pages/Tickets';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotel/:id" element={<HotelDetail />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/location" element={<Location />} />
          <Route path="/location/:id" element={<Location />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event/:id" element={<Events />} />
          <Route path="/cost" element={<Cost />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
