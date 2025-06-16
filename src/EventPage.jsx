import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeEvent from './pages/HomeEvent';
import EventsList from './pages/EventsList';
import EventDetails from './pages/EventDetails';
import BookingPage from './pages/BookingPage';
import Login from './pages/Login';
import withLoginProtection from './hoc/withLoginProtection';


const ProtectedBooking = withLoginProtection(BookingPage);

function EventPage() {
  return (
      <Routes>
        <Route path="/" element={<HomeEvent />} />
        <Route path="/events" element={<EventsList />} />
        <Route path="/events/:eventId" element={<EventDetails />} />
        <Route path="/book/:eventId" element={<ProtectedBooking />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  );
}

export default EventPage;
