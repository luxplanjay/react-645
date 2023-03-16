import { Suspense, useRef } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

// 1. http://localhost:3000/dogs?dogId=2
// 2. http://localhost:3000/dogs/dog-2
// 3. const backLinkLocationRef = useRef(location.state?.from ?? '/dogs');
// 4. http://localhost:3000/dogs/dog-2/gallery
// 5. backLinkLocationRef не меняется и все еще ведет на http://localhost:3000/dogs?dogId=2

const DogDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/dogs');
  const { dogId } = useParams();

  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])

  return (
    <>
      <h1>DogDetails: {dogId}</h1>
      <Link to={backLinkLocationRef.current}>Назад к странице коллекции</Link>
      <ul>
        <li>
          <Link to="subbreeds">Подподроды</Link>
        </li>
        <li>
          <Link to="gallery">Галерея</Link>
        </li>
      </ul>
      <Suspense fallback={<div>LOADING SUBPAGE...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default DogDetails;
