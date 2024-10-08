import Tilt from "react-parallax-tilt";
import brain from "./brain.png";

const Logo = () => {
  return (
    <div className="ma4 mt0" style={{ display: "flex" }}>
      <Tilt className="br2 shadow-2">
        <div
          style={{
            height: "150px",
            width: "150px",
            display: "block",
            background: "linear-gradient(89deg, #ff5edf 0%, #04c8de 100%)",
          }}
          className=" box pa3"
        >
          <img src={brain} alt="logo" style={{ paddingTop: "5px" }} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
