export const Dog = ({ dog: { breeds, url } }) => {
  const { bred_for, name, temperament } = breeds[0];

  return (
    <div style={{ display: 'flex' }}>
      <img src={url} alt={name} width="320" />
      <div>
        <p>Name: {name}</p>
        <p>Bred for: {bred_for}</p>
        <p>Temperament: {temperament}</p>
      </div>
    </div>
  );
};
