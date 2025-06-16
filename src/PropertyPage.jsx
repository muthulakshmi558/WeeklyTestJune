import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropertyList from "./pages/PropertyList";
import PropertyDetail from "./pages/PropertyDetail";

function PropertyPage() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PropertyList />} />
        <Route path="/properties/:id" element={<PropertyDetail />} />
      </Routes>
    </>
  );
}

export default PropertyPage;
