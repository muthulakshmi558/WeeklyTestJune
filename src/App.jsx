import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import EventPage from "./EventPage";
import PropertyPage from "./PropertyPage";
import RecipePage from "./RecipePage";
import SurveyPage from "./SurveyPage";
import TicketPage from "./TicketPage";

const appTasks = [
  { id: 0, name: 'Recipe Sharing App', component: <RecipePage /> },
  { id: 1, name: 'Event Booking Platform', component: <EventPage /> },
  { id: 2, name: 'Ticket Support System', component: <TicketPage /> },
  { id: 3, name: 'Survey Builder App', component: <SurveyPage /> },
  { id: 4, name: 'Property Rental App', component: <PropertyPage /> },
];

function App() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % appTasks.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + appTasks.length) % appTasks.length);
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">
        App {appTasks[index].id + 1}: {appTasks[index].name}
      </h3>

      <div className="component-wrapper p-3 border rounded shadow-sm">
        {appTasks[index].component}
      </div>

      <div className="text-center mt-4">
        <button onClick={handlePrev} className="btn btn-outline-secondary me-3">← Previous</button>
        <button onClick={handleNext} className="btn btn-outline-primary">Next →</button>
      </div>
    </div>
  );
}

export default App;
