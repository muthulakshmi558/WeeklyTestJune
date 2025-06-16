import { Routes, Route, Navigate } from 'react-router-dom';
import EditSurvey from './pages/EditSurvey';
import ViewSurvey from './pages/ViewSurvey';
import HomeSurvey from './pages/HomeSurvey';

function SurveyPage() {
  return (
    <Routes>
      <Route path="/" element={<HomeSurvey />} />
      <Route path="/surveys/:id/edit" element={<EditSurvey />} />
      <Route path="/surveys/:id/view" element={<ViewSurvey />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default SurveyPage;
