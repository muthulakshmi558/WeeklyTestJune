import { useEffect, useState } from "react";
import { getAllProperties } from "../api/property";
import { Link } from "react-router-dom";

function PropertyList() {
  const [properties, setProperties] = useState([]);

    useEffect(() => {
    getAllProperties().then((res) => setProperties(res.data.properties)); 
    }, []);


  return (
    <div className="container mt-4">
      <h2>All Properties</h2>
      <div className="row">
        {properties.map((property) => (
          <div className="col-md-4 mb-4" key={property.id}>
            <div className="card">
              <img src={property.thumbnail} className="card-img-top" alt="" />
              <div className="card-body">
                <h5>{property.title}</h5>
                <p>{property.location}</p>
                <p>₹ {property.price} / night</p>
                <Link to={`/properties/${property.id}`} className="btn btn-primary">
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PropertyList;
