import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">🍽️ Recipe Sharing App</h1>
      <p className="lead">Cook it. Share it. Love it.</p>

      <img
        src="https://img.freepik.com/premium-photo/top-view-delicious-chicken-meal-arrangement_23-2148763876.jpg"
        alt="Delicious food"
        className="img-fluid rounded shadow mb-4"
        style={{ maxHeight: '300px' }}
      />

      <div className="d-flex justify-content-center gap-3">
        <Link to="/recipes" className="btn btn-primary btn-lg">📋 View Recipes</Link>
        <Link to="/add" className="btn btn-success btn-lg">➕ Add Recipe</Link>
      </div>
    </div>
  );
}

export default Home;
