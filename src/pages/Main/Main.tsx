import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { FooterComponent } from "../../components/FooterComponent";
import { HeaderComponent } from "../../components/HeaderComponent";
import { MainContent } from "./components/MainContent/MainContent";

export const Main = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Order - художественная мастерская</title>
          <meta
            name="keywords"
            content="колонны, колонна, лепнина, скульптура, львы, декор, интерьер, гипс, фибробетон, пластик"
          />
          <meta name="description" content="Order - художественная мастерская" />
        </Helmet>
        <HeaderComponent />
        <MainContent />
        <FooterComponent />
      </HelmetProvider>
    </>
  );
};
