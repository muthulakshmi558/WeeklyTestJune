import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../api/ticket'; 

export default function HomeTicket() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    api.get('/tickets.json')
      .then((res) => {
        setTickets(res.data || []);
      })
      .catch((err) => {
        console.error("❌ Error fetching tickets", err);
        setTickets([]);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">🎫 Support Tickets</h2>
      
      {tickets.length === 0 ? (
        <p>No tickets available.</p>
      ) : (
        <div className="list-group">
          {tickets.map((ticket) => (
            <Link
              key={ticket.id}
              to={`/tickets/${ticket.id}`}
              className="list-group-item list-group-item-action"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{ticket.subject}</h5>
                <small>{ticket.createdAt}</small>
              </div>
              <p className="mb-1">Status: <strong>{ticket.status}</strong></p>
              <small>Customer: {ticket.customer}</small>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
