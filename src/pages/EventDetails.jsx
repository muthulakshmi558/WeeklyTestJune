import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api/event';

export default function EventDetails() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    api.get('/events.json').then((res) => {
      const found = res.data.events.find(e => e.id === parseInt(eventId));
      setEvent(found);
    }).catch((err) => {
      console.error("Error fetching event:", err);
    });
  }, [eventId]);

  if (!event) return <p>Loading event...</p>;

  return (
    <div className="container mt-4">
      <h2>{event.title}</h2>
      <img src={event.thumbnail} alt={event.title} width="300" />
      <p>{event.description}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Price:</strong> ₹{event.price}</p>
      <Link to={`/book/${event.id}`} className="btn btn-success">Book Now</Link>
    </div>
  );
}
