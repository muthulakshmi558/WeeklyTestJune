import { createPortal } from "react-dom";
import { useState } from "react";

function ImageCarouselModal({ images, onClose }) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);
  const next = () => setIndex((prev) => (prev + 1) % images.length);

  return createPortal(
    <div className="modal-backdrop text-center">
      <div className="modal-dialog bg-dark p-4 rounded text-white">
        <img src={images[index]} alt="" className="img-fluid rounded" />
        <div className="mt-3">
          <button onClick={prev} className="btn btn-light mx-2">⬅️</button>
          <button onClick={next} className="btn btn-light mx-2">➡️</button>
        </div>
        <button className="btn btn-danger mt-3" onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}

export default ImageCarouselModal;
