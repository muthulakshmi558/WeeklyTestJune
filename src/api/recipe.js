import axios from 'axios';
import dummyRecipes from '../../public/data/recipes';

export const fetchRecipes = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: dummyRecipes });
    }, 1000); 
  });
};

export const fetchRecipeById = (id) => {
  return new Promise((resolve, reject) => {
    const recipe = dummyRecipes.find(r => r.id === parseInt(id));
    setTimeout(() => {
      if (recipe) {
        resolve({ data: recipe });
      } else {
        reject(new Error("Loading Recipes.."));
      }
    }, 1000);
  });
};
