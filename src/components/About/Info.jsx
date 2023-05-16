import Gif from "../../assets/o8P.gif";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <img src={Gif} alt="" style={{ height: 80 }} />
      </div>
      <div className="about__box">
        <img src={Gif} alt="" style={{ height: 80 }} />
      </div>
      <div className="about__box">
        <img src={Gif} alt="" style={{ height: 80 }} />
      </div>
    </div>
  );
};

export default Info;
