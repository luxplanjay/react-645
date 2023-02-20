import PropTypes from 'prop-types';
import { Recipe } from '../Recipe/Recipe';
import { List, ListItem } from './RecipeList.styled';

export const RecipeList = ({ items, onDelete, onSelect }) => {
  return (
    <List>
      {items.map(item => (
        <ListItem key={item.id}>
          <Recipe item={item} onDelete={onDelete} onSelect={onSelect} />
        </ListItem>
      ))}
    </List>
  );
};

RecipeList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
