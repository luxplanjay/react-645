import ContentLoader from 'react-content-loader';

export const DogSkeleton = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="270" y="23" rx="2" ry="2" width="105" height="14" />
    <rect x="7" y="16" rx="2" ry="2" width="247" height="247" />
    <rect x="273" y="93" rx="2" ry="2" width="105" height="14" />
    <rect x="272" y="60" rx="2" ry="2" width="107" height="14" />
  </ContentLoader>
);
