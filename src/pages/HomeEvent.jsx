import { Link } from 'react-router-dom';

export default function HomeEvent() {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">🎫 Welcome to EventX Booking!</h1>
      <p className="lead">Book tickets for your favorite events instantly.</p>

      <div className="d-flex justify-content-center gap-3 mt-4">
        <Link to="/events" className="btn btn-primary btn-lg">
          Browse Events
        </Link>
        <Link to="/login" className="btn btn-outline-success btn-lg">
          Login to Book
        </Link>
      </div>

      <img
        src="https://cdn-icons-png.flaticon.com/512/7479/7479749.png"
        alt="Event"
        className="mt-5"
        width={180}
      />
    </div>
  );
}
