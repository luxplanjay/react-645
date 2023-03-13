const { useParams } = require('react-router-dom');

export const SubBreeds = () => {
  const { dogId } = useParams();

  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])

  return <div>SubBreeds: {dogId}</div>;
};
