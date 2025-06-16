import ReplyModal from "../components/ReplyModal"; 

export default function TicketDetails() {
  const { ticketId } = useParams();
  const [ticket, setTicket] = useState(null);
  const [showReply, setShowReply] = useState(false);

  useEffect(() => {
    axios.get(`/data/ticket-${ticketId}.json`)
      .then((res) => setTicket(res.data))
      .catch(() => setTicket(null));
  }, [ticketId]);

  const handleSend = (message) => {
    console.log("📤 Reply sent:", message);
  };

  if (!ticket) return <p>Loading ticket...</p>;

  return (
    <div className="container mt-4">
      <h3>🎫 Ticket #{ticket.id} - {ticket.subject}</h3>
      <p>Status: <strong>{ticket.status}</strong></p>
      <hr />
      <div>
        {ticket.thread.map((msg, i) => (
          <div key={i} className="mb-3">
            <p><strong>{msg.from}</strong> <small>({msg.timestamp})</small></p>
            <div className="border p-2 rounded">{msg.message}</div>
          </div>
        ))}
      </div>

      <button className="btn btn-success mt-3" onClick={() => setShowReply(true)}>
        ✍️ Reply
      </button>

      {showReply && (
        <ReplyModal onClose={() => setShowReply(false)} onSend={handleSend} />
      )}
    </div>
  );
}
