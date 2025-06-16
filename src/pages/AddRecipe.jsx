import { useState } from 'react';
import ImagePreviewModal from '../components/ImagePreviewModal';
import NutritionTipsModal from '../components/NutritionTipsModal';

function AddRecipe({ onSubmit }) {
  const [showTips, setShowTips] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '', description: '', image: '', ingredients: '', steps: ''
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedData = {
      ...formData,
      ingredients: formData.ingredients.split(','),
      steps: formData.steps.split(','),
    };
    onSubmit(formattedData);
  };

  return (
    <div className="container mt-4">
      <h2>➕ Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Title</label>
          <input
            name="title"
            className="form-control"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Description</label>
          <textarea
            name="description"
            className="form-control"
            rows="3"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mb-3">
          <label>Image URL</label>
          <input
            name="image"
            className="form-control"
            value={formData.image}
            onChange={handleChange}
          />
          <button
            type="button"
            className="btn btn-outline-primary mt-2"
            onClick={() => setShowModal(true)}
          >
            🔍 Preview Image
          </button>
        </div>

        <div className="mb-3">
          <label>Ingredients (comma separated)</label>
          <input
            name="ingredients"
            className="form-control"
            value={formData.ingredients}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Steps (comma separated)</label>
          <textarea
            name="steps"
            className="form-control"
            rows="4"
            value={formData.steps}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-success">
          ✅ Submit
        </button>

        <button
          type="button"
          className="btn btn-info ms-3"
          onClick={() => setShowTips(true)}
        >
          💡 Show Nutrition Tips
        </button>
      </form>

      {showTips && <NutritionTipsModal onClose={() => setShowTips(false)} />}

      {showModal && (
        <ImagePreviewModal
          imageUrl={formData.image}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default AddRecipe;
