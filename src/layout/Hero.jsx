const Hero = () => {
  return (
    <section className="container mx-auto relative">
      <img
        src="assets/hero-image-wr.jpg"
        alt="world image"
        className=" min-h-fit"
      />
      <img
        src="assets/Logo.svg"
        alt="logo"
        className=" absolute bottom-1/2 left-1/2 transform -translate-x-1/2 "
      />
    </section>
  );
};

export default Hero;
