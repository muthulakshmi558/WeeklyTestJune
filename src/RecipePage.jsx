import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RecipeList from './pages/RecipeList';
import RecipeDetail from './pages/RecipeDetail';
import AddRecipe from './pages/AddRecipe';
import withValidation from './hoc/withValidation';

const ValidatedAddRecipe = withValidation(AddRecipe);

function RecipePage() {
  return (
   <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="/add" element={<ValidatedAddRecipe />} />
      </Routes>
    </>
  );
}

export default RecipePage;
