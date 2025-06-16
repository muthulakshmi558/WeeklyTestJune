import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSurveyById } from '../api/survey';

function ViewSurvey() {
  const { id } = useParams();
  const [survey, setSurvey] = useState(null);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSurveyById(id)
      .then(res => {
        setSurvey(res.data);

        const saved = localStorage.getItem(`responses-${id}`);
        if (saved) {
          setAnswers(JSON.parse(saved));
        } else {
          setAnswers({});
        }

        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading survey...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-4">
      <h2>📋 Survey: {survey.title}</h2>
      <p className="text-muted">Preview of your latest answers:</p>

      <ul className="list-group">
        {survey.questions.map((q, index) => (
          <li key={index} className="list-group-item">
            <strong>{q.label}</strong>
            <br />
            {answers[index] ? answers[index] : <em>No answer yet</em>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewSurvey;
