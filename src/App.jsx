import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./Sections";
import ScrollUpButton from "./components/ScrollUpButton/ScrollUpButton";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="relative dark:bg-bg-dark flex flex-col h-screen">
      <Header />
      <main className="relative flex-grow dark:bg-bg-dark">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ScrollUpButton />
                <Hero />
                <PopularProducts />
                <SuperQuality />
                <Services />
                <SpecialOffer />
                <CustomerReviews />
                <Subscribe />
              </>
            }
          />
        </Routes>
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
