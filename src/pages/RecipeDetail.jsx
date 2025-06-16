import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecipeById } from '../api/recipe';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecipeById(id)
      .then(response => {
        setRecipe(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h4 className="text-center">⏳ Loading Recipe...</h4>;
  if (!recipe) return <h4 className="text-center text-danger">❌ Recipe Not Found</h4>;

  return (
    <div className="card mx-auto" style={{ maxWidth: '600px' }}>
      <img src={recipe.image} className="card-img-top" alt={recipe.title} />
      <div className="card-body">
        <h2>{recipe.title}</h2>
        <p>{recipe.description}</p>

        <h5>📝 Ingredients:</h5>
        <ul className="list-group mb-3">
          {recipe.ingredients.map((item, index) => (
            <li key={index} className="list-group-item">{item}</li>
          ))}
        </ul>

        <h5>👨‍🍳 Steps:</h5>
        <ol className="list-group list-group-numbered mb-3">
          {recipe.steps.map((step, index) => (
            <li key={index} className="list-group-item">{step}</li>
          ))}
        </ol>

        <button className="btn btn-secondary" onClick={() => window.history.back()}>
          🔙 Back to Recipes
        </button>
      </div>
    </div>
  );
}

export default RecipeDetail;
