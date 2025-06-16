import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReplyModal from '../components/ReplyModal';
import axios from 'axios';


export default function TicketDetails() {
  const { ticketId } = useParams();
  const [ticket, setTicket] = useState(null);
  const [showReplyModal, setShowReplyModal] = useState(false);

  useEffect(() => {
  axios.get(`/data/ticket-list/${ticketId}.json`)
    .then((res) => {
      setTicket(res.data);
    })
    .catch((err) => {
      console.error("Failed to fetch ticket details", err);
      setTicket(null);
    });
}, [ticketId]);

  const handleSendReply = (payload) => {
    console.log('📤 Reply sent:', payload.message);
    console.log('📎 File attached:', payload.fileName);
    alert('Reply sent!');
  };

  if (!ticket) return <p>Loading ticket...</p>;

  return (
    <div className="container mt-4">
      <h3>🎫 Ticket #{ticket.id}</h3>
      <p><strong>Subject:</strong> {ticket.subject}</p>
      <p><strong>Customer:</strong> {ticket.customer}</p>

      <hr />
      <h5>🧵 Conversation:</h5>
      <ul className="list-group mb-3">
            {ticket.messages?.map((msg, idx) => (
            <li key={idx} className={`list-group-item ${msg.sender === 'agent' ? 'list-group-item-info' : ''}`}>
            <strong>{msg.sender === 'agent' ? 'Agent' : 'Customer'}:</strong> {msg.text}
          <span className="float-end text-muted">{msg.time}</span>
          </li>
         ))}
       </ul>

      <button className="btn btn-primary" onClick={() => setShowReplyModal(true)}>
        ✍️ Reply
      </button>

      {showReplyModal && (
        <ReplyModal
          onClose={() => setShowReplyModal(false)}
          onSend={handleSendReply}
        />
      )}
    </div>
  );
}
