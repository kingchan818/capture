import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div className="description">
      <div className="title">
        <div className="hide">
          <h2>We work to make</h2>
        </div>

        <div className="hide">
          <h2>
            your <span>dreams</span> come{" "}
          </h2>
        </div>

        <div className="hide">
          <h2>True</h2>
        </div>
        <p>
          contact us for any photography or videography idea we make you come
          true
        </p>
      </div>
      <div className="image">
        <img src={home1} alt="cam man" />
      </div>
    </div>
  );
};

export default AboutSection;
