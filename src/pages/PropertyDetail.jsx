import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPropertyById } from "../api/property";
import BookingModal from "../components/BookingModal";
import withAuthProtection from "../hoc/withAuthProtection";
import ImageCarouselModal from "../components/ImageCarouselModal";

const ProtectedBookingModal = withAuthProtection(BookingModal);

function PropertyDetail() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [showBooking, setShowBooking] = useState(false);
  const [showCarousel, setShowCarousel] = useState(false); 

  useEffect(() => {
    getPropertyById(id).then((res) => setProperty(res.data));
  }, [id]);

  if (!property) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>{property.title}</h2>
      <p>{property.description}</p>
      <p><strong>Location:</strong> {property.location}</p>

      <img
        src={property.thumbnail}
        onClick={() => setShowCarousel(true)}
        className="img-fluid mb-3 rounded"
        style={{ cursor: "pointer" }}
        alt="property"
      />

      <p>₹ {property.price} / night</p>
      <p>⭐ {property.rating}</p>

      <button className="btn btn-success" onClick={() => setShowBooking(true)}>
        Book Now
      </button>

      {showBooking && (
        <ProtectedBookingModal
          property={property}
          onClose={() => setShowBooking(false)}
        />
      )}

      {showCarousel && (
        <ImageCarouselModal
          images={property.images || [property.thumbnail]}
          onClose={() => setShowCarousel(false)}
        />
      )}
    </div>
  );
}

export default PropertyDetail;
