import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/1_Home/Home";
import About from "./pages/2_About/About";
import Room from "./pages/3_Rooms/Room";
import Services from "./pages/4_Facilities/Services";
import Promotion from "./pages/5_Promotions/Promotion";
import Testimonial from "./pages/6_Testimonials/Testimonial";
import Food from "./pages/7_Foods/Food";
import Team from "./pages/8_Team/Team";
import CheckIn from "./pages/9_Contact/CheckIn";
import Blog from "./pages/10_Blog/Blog";
import Footer from "./pages/11_Footer/Footer";
import { useRef } from "react";
import Navigation from "./pages/1_Home/Navigation";

function App() {
  const ref = Array.from({ length: 7 }, () =>
    useRef<HTMLDivElement | null>(null)
  );
  const handleScroll = (i: number) => {
    ref[i]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navigation handleScroll={handleScroll} />
      <Home ref={ref[0]} />
      <div className="devider"></div>
      <About ref={ref[1]} />
      <div className="devider"></div>
      <Room ref={ref[3]} />
      <div className="devider"></div>
      <Services ref={ref[2]} />
      <div className="devider"></div>
      <Promotion />
      <div className="devider"></div>
      <Testimonial ref={ref[4]} />
      <div className="devider"></div>
      <Food />
      <div className="devider"></div>
      <Team />
      <div className="devider"></div>
      <CheckIn ref={ref[6]} />
      <div className="devider"></div>
      <Blog ref={ref[5]} />
      <div className="devider"></div>
      <Footer handleScroll={handleScroll}/>
    </>
  );
}

export default App;
