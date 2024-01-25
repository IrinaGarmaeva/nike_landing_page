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
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="relative">
      <Header />
      <main className="relative">
        <Hero />
        <PopularProducts />
        <SuperQuality />
        <Services />
        <SpecialOffer />
        <CustomerReviews />
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
};

export default App;
