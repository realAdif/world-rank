import bgImage from '../assets/hero-image-wr.jpg';
import logoImage from '../assets/Logo.svg';
const Hero = () => {
  return (
    <section className="container mx-auto relative">
      <img src={bgImage} alt="world image" className=" min-h-fit" />
      <img
        src={logoImage}
        alt="logo"
        className=" absolute bottom-1/2 left-1/2 transform -translate-x-1/2 "
      />
    </section>
  );
};

export default Hero;
