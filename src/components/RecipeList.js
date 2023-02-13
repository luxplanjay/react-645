import PropTypes from 'prop-types';
import { Recipe } from './Recipe';

export const RecipeList = ({ items }) => {
  return (
    <ul style={{ display: 'flex', gap: 16 }}>
      {items.map(item => (
        <li key={item.id}>
          <Recipe item={item} />
        </li>
      ))}
    </ul>
  );
};

RecipeList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
