import { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponent';
import MainContentComponent from '../components/MainContentComponent';

const Main = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Order - художественная мастерская</title>
          <meta name="description" content="Order - художественная мастерская" />
        </Helmet>
        <HeaderComponent />
        <MainContentComponent />
        <FooterComponent />
      </HelmetProvider>
    </>
  );
};

export default Main;
