import { useState } from "react";

function BookingModal({ property, onClose }) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState("");

  return (
    <>
      <div className="modal-backdrop">
        <div className="modal-dialog p-4 bg-white shadow rounded">
          <h5>Book {property.title}</h5>
          <button
            className="btn btn-outline-primary mb-3"
            onClick={() => setShowCalendar(true)}
          >
            Select Date
          </button>
          <p>Selected: {date || "No date selected"}</p>

          <button
            className="btn btn-success"
            onClick={() => {
              if (!date) return alert("Select a date first!");
              alert(`Booked ${property.title} for ${date}`);
            }}
          >
            Confirm
          </button>

          <button className="btn btn-outline-secondary mt-2" onClick={onClose}>
            Cancel
          </button>

          {showCalendar && (
            <input
              type="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
                setShowCalendar(false);
              }}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default BookingModal;
