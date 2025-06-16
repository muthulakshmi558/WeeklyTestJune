import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchSurveyById } from '../api/survey';
import withAutoSave from '../hoc/withAutoSave';
import LivePreviewModal from '../components/LivePreviewModal';

const EnhancedEditSurvey = withAutoSave(EditSurvey);

function EditSurvey({ formData, setFormData }) {
  const { id } = useParams();
  const [survey, setSurvey] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    fetchSurveyById(id)
      .then(res => {
        console.log("Survey data fetched:", res.data); 
        setSurvey(res.data);

        const initialAnswers = {};
        res.data.questions.forEach((q, idx) => {
          initialAnswers[idx] = '';
        });
        setFormData(initialAnswers);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (index, value) => {
    setFormData(prev => ({
      ...prev,
      [index]: value,
    }));
  };
 const handleSubmit = (e) => {
   e.preventDefault();
   localStorage.setItem(`responses-${id}`, JSON.stringify(formData));
   alert("✅ Your response has been saved!");
 };
  if (loading) return <p>Loading survey...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-4">
      <h2>📝 Edit: {survey.title}</h2>

      <button className="btn btn-outline-primary mb-3" onClick={() => setShowPreview(true)}>
        👁️ Live Preview
      </button>

      <Link to={`/surveys/${id}/view`} className="btn btn-success ms-2">
        📄 View Survey
      </Link>

      <form onSubmit={handleSubmit}>
        {survey.questions.map((q, index) => (
          <div key={index} className="mb-3">
            <label className="form-label">{q.label}</label>
            <input
              type="text"
              className="form-control"
              value={formData[index] || ''}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          </div>
        ))}
        <button type="submit" className="btn btn-success mt-3">
  ✅ Submit
</button>


      </form>

      {showPreview && (
        <LivePreviewModal
          survey={survey}
          formData={formData}
          onClose={() => setShowPreview(false)}
        />
      )}
    </div>
  );
}

function EditSurveyWithAutoSaveWrapper() {
  const [formData, setFormData] = useState({});
  return <EnhancedEditSurvey formData={formData} setFormData={setFormData} />;
}

export default EditSurveyWithAutoSaveWrapper;
