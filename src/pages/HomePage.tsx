import Header from '../components/Header';
import HomeSection from '../features/HomePage';
import useAuth from '../hooks/useAuth';

const HomePage = () => {
  const user = useAuth();

  return (
    <>
      <Header />
      <HomeSection />
    </>
  );
};

export default HomePage;
