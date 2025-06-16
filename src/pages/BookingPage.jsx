import { useParams } from 'react-router-dom';
import { useState } from 'react';
import TicketModal from '../components/TicketModal';

const allSeats = ['A1','A2','A3','A4','A5','B1','B2','B3','B4','B5'];
const bookedSeats = ['A3', 'B2']; 

export default function BookingPage() {
  const { eventId } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const toggleSeat = (seat) => {
    if (bookedSeats.includes(seat)) return; 
    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  const getSeatClass = (seat) => {
    if (bookedSeats.includes(seat)) return 'btn-danger';    // 🟥
    if (selectedSeats.includes(seat)) return 'btn-warning'; // 🟨
    return 'btn-outline-success';                           // 🟩
  };

  return (
    <div className="container">
      <h2>🎟 Booking for Event ID: {eventId}</h2>
      <p>Select your seats:</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {allSeats.map((seat) => (
          <button
            key={seat}
            className={`btn ${getSeatClass(seat)}`}
            disabled={bookedSeats.includes(seat)}
            onClick={() => toggleSeat(seat)}
          >
            {seat}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <button
          className="btn btn-success"
          disabled={selectedSeats.length === 0}
          onClick={() => setShowModal(true)}
        >
          Confirm Booking
        </button>
      </div>

      <TicketModal
        show={showModal}
        onClose={() => setShowModal(false)}
        selectedSeats={selectedSeats}
        eventId={eventId}
      />
    </div>
  );
}
