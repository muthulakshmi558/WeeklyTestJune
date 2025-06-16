import React from 'react';
import './LivePreviewModal.css'; 

export default function LivePreviewModal({ survey, formData, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h4>👁️ Live Preview: {survey.title}</h4>
        <ul className="list-group">
          {survey.questions.map((q, idx) => (
            <li key={idx} className="list-group-item">
              <strong>{q.label}</strong>: {formData[idx] || 'No answer'}
            </li>
          ))}
        </ul>
        <button onClick={onClose} className="btn btn-danger mt-3">❌ Close</button>
      </div>
    </div>
  );
}
