import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/event';

export default function EventsList() {
  const [events, setEvents] = useState([]);

 useEffect(() => {
  api.get('/events.json')
    .then((res) => {
      console.log("📦 Full Response:", res);           
      console.log("✅ Events:", res.data?.events);      
      setEvents(res.data?.events || []);
    })
    .catch((err) => {
      console.error("❌ Axios Error", err);
      setEvents([]);
    });
}, []);

  return (
    <div className="container mt-4">
      <h2>🎉 All Upcoming Events</h2>

      {Array.isArray(events) && events.length > 0 ? (
        <div className="row">
          {events.map((event) => (
            <div key={event.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={event.thumbnail} className="card-img-top" alt={event.title} />
                <div className="card-body">
                  <h5 className="card-title">{event.title}</h5>
                  <p className="card-text">{event.description}</p>
                  <p><strong>Date:</strong> {event.date}</p>
                  <p><strong>Price:</strong> ₹{event.price}</p>
                  <Link to={`/events/${event.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading or no events found...</p>
      )}
    </div>
  );
}
