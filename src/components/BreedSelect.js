import { useEffect, useState } from 'react';
import Select from 'react-select';
import { ErrorMessage } from './ErrorMessage';
import { fetchBreeds } from '../api';

export const BreedSelect = ({ onSelect }) => {
  const [breeds, setBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getBreeds() {
      try {
        setIsLoading(true);
        setError(null);
        const fetchedBreeds = await fetchBreeds();
        setBreeds(fetchedBreeds);
      } catch (error) {
        setError(
          'Что-то пошло не так, перезагрузите страницу, вдруг поможет 🥹'
        );
      } finally {
        setIsLoading(false);
      }
    }

    getBreeds();
  }, []);

  const options = breeds.map(breed => ({
    label: breed.name,
    value: breed.id,
  }));

  return (
    <div>
      <Select
        options={options}
        isLoading={isLoading}
        onChange={option => onSelect(option.value)}
      />
      {error && !isLoading && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};
