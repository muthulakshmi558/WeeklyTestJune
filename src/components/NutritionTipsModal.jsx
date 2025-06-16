import ReactDOM from 'react-dom';

function NutritionTipsModal({ onClose }) {
  return ReactDOM.createPortal(
    <div className="modal-backdrop d-flex align-items-center justify-content-center" style={{ position: 'fixed',  left: 0, width: '50%', height: '50%', background: '#00000088' }}>
      <div className="bg-light p-4 rounded shadow" style={{ maxWidth: '500px' }}>
        <h4>💡 Nutrition Tips</h4>
        <ul>
          <li>🥦 Add more veggies to your meals</li>
          <li>🍗 Use lean protein sources</li>
          <li>🧂 Reduce salt and sugar where possible</li>
          <li>💧 Stay hydrated throughout the day</li>
        </ul>
        <button className="btn btn-secondary mt-2" onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById('portal-root')
  );
}

export default NutritionTipsModal;
