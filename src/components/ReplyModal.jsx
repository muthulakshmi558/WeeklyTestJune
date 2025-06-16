import ReactDOM from "react-dom";
import { useState } from "react";

export default function ReplyModal({ onClose, onSend }) {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  const handleSend = () => {
    const payload = {
      message,
      fileName: file?.name || null,
    };
    onSend(payload);
    onClose();
  };

  return ReactDOM.createPortal(
    <div className="modal-backdrop" style={backdropStyle}>
      <div className="modal-content" style={modalStyle}>
        <h5>✍️ Reply to Ticket</h5>
        <textarea
          className="form-control mb-2"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your reply here..."
        ></textarea>

        <input
          type="file"
          className="form-control mb-2"
          onChange={(e) => setFile(e.target.files[0])}
        />

        {file && <p className="text-success">📎 Attached: {file.name}</p>}

        <div className="d-flex justify-content-end">
          <button className="btn btn-secondary me-2" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}

const backdropStyle = {
  position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: "rgba(0,0,0,0.5)", display: "flex",
  justifyContent: "center", alignItems: "center", zIndex: 9999,
};

const modalStyle = {
  background: "white", padding: "20px", borderRadius: "10px", width: "400px"
};
