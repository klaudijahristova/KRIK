import React, { useState } from "react";
import "../styles/bootstrap.min.css";
import "../styles/main.css";
import "../styles/Header.css";
import "../styles/footer.css";
import "../styles/HomePage/hero.css";
import "../styles/HomePage/naskoro.css";
import "../styles/HomePage/success.css";
import "../styles/HomePage/tutorial.css";
import "../styles/HomePage/najnoviVesti.css";
import "../styles/HomePage/partneri.css";
import "../styles/HomePage/uslogi.css";
import "../styles/ZaNas/zaNas.css";
import "../styles/Uslogi/services.css";
import "../styles/pristapnost.css";
import "../styles/NashiotTim/nashiotTim.css";
import "../styles/nasiteVolonteri/nasiteVolonteri.css";
import "../styles/nasiteVolonteri/volonter.css";
import "../styles/Projects/projects.css";
import "../styles/Projects/singleProject.css";
import "../styles/prijava/prijava.css";
import "../styles/Doniraj/doniraj.css";
import "../styles/arhiva/arhiva.css";
import "../styles/newsletter/newsletter.css";
import "../styles/newsletter/monthNews.css";
import "../styles/newsletter/singleNews.css";
import "../styles/eShop/e-shop.css";
import "../styles/eShop/shopSinglePage.css";
import "../styles/search/search.css";
import type { AppProps } from "next/app";
import Header from "src/components/Header/Header";
import Footer from "src/components/Footer/Footer";
import PristapnostBtn from "src/components/PristapnostBtn";
import Pristapnost from "src/components/Pristapnost";
import { showAccessibility } from "src/services/functions";
import { AccessibilityProvider } from "src/components/AccessibilityContext";
import ScreenMask from "src/components/ScreenMask";

export default function App({ Component, pageProps }: AppProps) {
  const [accessibilityState, setAccessibilityState] = useState({
    isPristapnostBtnVisible: true,
    isPristapnostVisible: false,
  });

  const { handlePristapnostBtnClick, handlePristapnostMouseOver } =
    showAccessibility(setAccessibilityState);

  return (
    <>
      <AccessibilityProvider>
        {accessibilityState.isPristapnostBtnVisible && (
          <PristapnostBtn onClick={handlePristapnostBtnClick} />
        )}
        {accessibilityState.isPristapnostVisible && (
          <Pristapnost onMouseOut={handlePristapnostMouseOver} />
        )}
        <Header />
        <ScreenMask>
          <Component {...pageProps} />
        </ScreenMask>
        <Footer />{" "}
      </AccessibilityProvider>
    </>
  );
}
