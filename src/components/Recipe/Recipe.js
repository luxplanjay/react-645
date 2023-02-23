import { Component } from 'react';
import PropTypes from 'prop-types';
import { BsAlarm } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';
import { HiOutlineChartBar, HiTrash, HiZoomIn } from 'react-icons/hi';
import {
  Container,
  Image,
  Meta,
  RecipeInfo,
  InfoItem,
  RecipeDifficulty,
  Badge,
  Title,
  Actions,
} from './Recipe.styled';
import { Modal } from 'components/Modal';

export class Recipe extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => this.setState({ isOpen: true });

  closeModal = () => this.setState({ isOpen: false });

  render() {
    const {
      item: { id, name, image, time, servings, calories, difficulty },
      onDelete,
    } = this.props;

    return (
      <Container>
        <Image src={image} alt={name} />
        <Meta>
          <Title>{name}</Title>

          <RecipeInfo>
            <InfoItem>
              <BsAlarm size="20" />
              {time} min
            </InfoItem>
            <InfoItem>
              <AiOutlinePieChart size="20" />
              {servings} servings
            </InfoItem>
            <InfoItem>
              <HiOutlineChartBar size="20" />
              {calories} calories
            </InfoItem>
          </RecipeInfo>

          <RecipeDifficulty>
            <Badge isActive={difficulty === 'easy'} value={difficulty}>
              Easy
            </Badge>
            <Badge isActive={difficulty === 'medium'} value={difficulty}>
              Medium
            </Badge>
            <Badge isActive={difficulty === 'hard'} value={difficulty}>
              Hard
            </Badge>
          </RecipeDifficulty>

          <Actions>
            <button onClick={() => onDelete(id)} aria-label="Delete">
              <HiTrash />
            </button>
            <button onClick={this.openModal} aria-label="Zoom">
              <HiZoomIn />
            </button>
          </Actions>
        </Meta>

        {this.state.isOpen && (
          <Modal
            image={image}
            isOpen={this.state.isOpen}
            onClose={this.closeModal}
          />
        )}
      </Container>
    );
  }
}

Recipe.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
