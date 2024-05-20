import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Tech,
  Works,
  StarsCanvas,
} from "../components";
import useMediaQuery from "../hooks/useMediaQuery";

const Home = () => {
  const isDesktop = useMediaQuery(1024);

  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <About />
      <Experience />
      {isDesktop && <Tech />}
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </>
  );
};

export default Home;
