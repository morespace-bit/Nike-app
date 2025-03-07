import Nav from "./Components/Nav";
import PopularProducts from "./Components/PopularProducts";
import Subscribe from "./Components/Subscribe";
import Hero from "./Components/Hero";
import CustomerReviews from "./Components/CustomerReviews";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import SpecialOffer from "./Components/SpecialOffer";
export default function App() {
  return (
    <main className="relative">
      <Nav />

      <section className="">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">{/* <SuperQuality /> */}</section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className=" bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}
