import { useState, useEffect } from 'react';
import { RecipeList } from './RecipeList/RecipeList';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import initialRecipes from '../recipes.json';
import { RecipeForm } from './RecipeForm/RecipeForm';

const getInitialRecipes = () => {
  const savedRecipes = localStorage.getItem('recipes');
  if (savedRecipes !== null) {
    const parsedRecipes = JSON.parse(savedRecipes);
    return parsedRecipes;
  }
  return initialRecipes;
};

export const App = () => {
  const [recipes, setRecipes] = useState(getInitialRecipes);

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = newRecipe => {
    setRecipes(prevState => [...prevState.recipes, newRecipe]);
  };

  const deleteRecipe = recipeId => {
    setRecipes(prevState => prevState.filter(recipe => recipe.id !== recipeId));
  };

  return (
    <Layout>
      <RecipeForm onSave={addRecipe} />
      <RecipeList items={recipes} onDelete={deleteRecipe} />
      <GlobalStyle />
    </Layout>
  );
};
