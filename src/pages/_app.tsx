import Footer from "components/core/footer/Footer";
import Navbar from "components/core/navbar/Navbar";
import "styles/globals.css";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default appWithTranslation(App);
