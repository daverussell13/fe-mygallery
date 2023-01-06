import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

import { ToastContainer } from "react-toastify";
import { AppContextProvider } from "../context/AppContextProvider";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AppContextProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </AppContextProvider>
    </>
  );
}
