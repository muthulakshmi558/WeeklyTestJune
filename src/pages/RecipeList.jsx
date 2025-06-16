import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchRecipes } from '../api/recipe'; 

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes()
      .then(res => setRecipes(res.data))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>📋 All Recipes</h2>
      <div className="row">
        {recipes.length === 0 ? (
          <p>No recipes yet!</p>
        ) : (
          recipes.map(recipe => (
            <div className="col-md-4" key={recipe.id}>
              <div className="card mb-3">
                <img src={recipe.image} alt={recipe.title} className="card-img-top" />
                <div className="card-body">
                  <h5>{recipe.title}</h5>
                  <p>{recipe.description.slice(0, 60)}...</p>
                  <Link to={`/recipes/${recipe.id}`} className="btn btn-primary">View</Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default RecipeList;
