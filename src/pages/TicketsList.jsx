import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function TicketDetails() {
  const { ticketId } = useParams();
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    axios.get(`/data/ticket-details/${ticketId}.json`) 
      .then((res) => {
        setTicket(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch ticket details", err);
        setTicket(null);
      });
  }, [ticketId]);

  if (!ticket) return <p>Loading ticket details...</p>;

  return (
    <div className="container mt-4">
      <h3>🎫 Ticket #{ticket.id} - {ticket.subject}</h3>
      <p>Status: <strong>{ticket.status}</strong></p>
      <hr />
      <div>
        {ticket.thread.map((msg, index) => (
          <div key={index} className="mb-3">
            <p><strong>{msg.from}</strong> <small className="text-muted">({msg.timestamp})</small></p>
            <div className="border p-2 rounded">{msg.message}</div>
          </div>
        ))}
      </div>

      <button className="btn btn-success mt-3">
        ✍️ Reply
      </button>
    </div>
  );
}
