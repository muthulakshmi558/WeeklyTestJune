import ReactDOM from 'react-dom';

function ImagePreviewModal({ imageUrl, onClose }) {
  return ReactDOM.createPortal(
    <div className="modal-backdrop d-flex align-items-center justify-content-center" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: '#00000099' }}>
      <div className="bg-white p-4 rounded shadow text-center" style={{ maxWidth: '500px' }}>
        <h4>🖼️ Image Preview</h4>
        <img src={imageUrl} alt="Preview" className="img-fluid rounded mb-3" />
        <button className="btn btn-danger" onClick={onClose}>❌ Close</button>
      </div>
    </div>,
    document.getElementById('portal-root')
  );
}

export default ImagePreviewModal;
