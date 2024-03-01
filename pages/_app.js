import "../styles/globals.css";

//INTRNAL IMPORT
import { NavBar, Footer } from "../components/componentindex";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
  </div>
);

export default MyApp;