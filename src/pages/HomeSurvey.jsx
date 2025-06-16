import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllSurveys } from '../api/survey';

export default function HomeSurvey() {
  const [surveys, setSurveys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllSurveys().then(res => {
      setSurveys(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading surveys...</p>;

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>📋 Survey List</h2>
      <p>Select a survey to edit or view:</p>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {surveys.map(survey => (
          <li key={survey.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <strong>{survey.title}</strong>
            <div style={{ marginTop: '5px' }}>
              <Link to={`/surveys/${survey.id}/edit`} style={{ marginRight: '10px', textDecoration: 'none', color: 'blue' }}>
                ✏️ Edit
              </Link>
              <Link to={`/surveys/${survey.id}/view`} style={{ textDecoration: 'none', color: 'green' }}>
                👁️ View
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
