import "./App.css";
import Banner from "./components/Banner/Banner.jsx";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Newsletter from "./components/Newsletter/Newsletter";
import OurMenu from "./components/OurMenu/OurMenu.jsx";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  });

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Banner />
      <OurMenu />
      <Testimonial />
      <Newsletter />
      <Footer />
    </main>
  );
}

export default App;
