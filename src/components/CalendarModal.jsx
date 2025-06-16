import { createPortal } from "react-dom";

function CalendarModal({ selectedDate, onChange, onClose }) {
  return createPortal(
    <div className="modal-backdrop">
      <div className="modal-dialog bg-white p-4 rounded shadow">
        <h5>Select Date</h5>
        <input
          type="date"
          value={selectedDate}
          className="form-control"
          onChange={(e) => onChange(e.target.value)}
        />
        <button className="btn btn-success mt-3" onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}

export default CalendarModal;
