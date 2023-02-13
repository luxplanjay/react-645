import { RecipeList } from './RecipeList';
import recipes from '../recipes.json';

export const App = () => {
  return (
    <div>
      <RecipeList items={recipes} />
    </div>
  );
};
