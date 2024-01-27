import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import ScrollUpButton from './components/ScrollUpButton/ScrollUpButton';
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="relative">
      <Header />
      <main className="relative max-container">
        <ScrollUpButton />
        <Hero />
        <PopularProducts />
        <SuperQuality />
        <Services />
        <SpecialOffer />
        <CustomerReviews />
        <Subscribe />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
