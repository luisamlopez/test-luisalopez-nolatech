import Announcement from "./components/Announcement";
import Home from "./sections/Home";
import About from "./sections/About";
import Services from "./sections/Services";
import CTA2 from "./sections/CTA2";
import Timer from "./components/Timer";
import Videos from "./sections/Videos";
import Contact from "./sections/ContactUs";
import Mobile from "./sections/Mobile";
import CarouselSection from "./sections/CarouselSection";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Announcement />
      <Home />
      <Timer />
      <About />
      <Services />
      <CTA2 />
      <Videos />
      <Contact />
      <Mobile />
      <CarouselSection />
      <Footer />

    </>

  );
}

export default App;
