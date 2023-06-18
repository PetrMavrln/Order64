import React, { useEffect } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import MainContentComponent from '../components/MainContentComponent';
import FooterComponent from '../components/FooterComponent';
import { useLocation } from 'react-router-dom';

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
      <HeaderComponent />
      <MainContentComponent />
      <FooterComponent />
    </>
  );
};

export default Main;
