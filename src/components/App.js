import { Component } from 'react';
import { RecipeList } from './RecipeList/RecipeList';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import initialRecipes from '../recipes.json';
import { RecipeForm } from './RecipeForm/RecipeForm';

export class App extends Component {
  state = {
    recipes: initialRecipes,
  };

  addRecipe = newRecipe => {
    this.setState(prevState => {
      return {
        recipes: [...prevState.recipes, newRecipe],
      };
    });
  };

  deleteRecipe = recipeId => {
    this.setState(prevState => {
      return {
        recipes: prevState.recipes.filter(recipe => recipe.id !== recipeId),
      };
    });
  };

  render() {
    return (
      <Layout>
        <RecipeForm onSave={this.addRecipe} />
        <RecipeList items={this.state.recipes} onDelete={this.deleteRecipe} />
        <GlobalStyle />
      </Layout>
    );
  }
}
