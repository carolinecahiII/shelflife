import "../Styles/Cards.css";
import Button from "./Button";
import PropTypes from "prop-types";
import defaultImage from "../Assets/placeholder-avatar.jpg";

function TeamCard({
  pixelatedImage,
  headShotImage,
  name,
  roles,
  description,
  imagePosition,
  porfolioVisibility,
  githubVisibility,
  linkedInLink,
  portfolioLink,
  githubLink,
}) {
  return (
    <div className={`card-cont ${imagePosition}`}>
      <div className="image-container">
        <img className="pixelated" src={pixelatedImage} alt={name} />
        <img className="headShot" src={headShotImage} alt={name} />
      </div>
      <div className="content-container">
        <h3>{name}</h3>
        <div className="highlight">
          {roles.map((role, index) => (
            <p key={index}>{role}</p>
          ))}
        </div>
        <p>{description}</p>
        <div className="card-buttons">
          {linkedInLink && <Button text="LinkedIn" link={linkedInLink} />}
          {porfolioVisibility !== "hide" && portfolioLink && <Button text="Portfolio" link={portfolioLink} />}
          {githubVisibility !== "hide" && githubLink && <Button text="GitHub" link={githubLink} />}
        </div>
      </div>
    </div>
  );
}

// Setting default props
TeamCard.defaultProps = {
  pixelatedImage: defaultImage,
  headShotImage: defaultImage,
  name: "Default Name",
  roles: ["Default Role"],
  description: "Default Description.",
  imagePosition: "right",
  porfolioVisibility: "show",
  githubVisibility: "show",
  linkedInLink: null,
  portfolioLink: null,
  githubLink: null,
};

// Defining the prop types
TeamCard.propTypes = {
  pixelatedImage: PropTypes.string,
  headShotImage: PropTypes.string,
  name: PropTypes.string,
  roles: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  imagePosition: PropTypes.oneOf(["left", "right"]),
  porfolioVisibility: PropTypes.oneOf(["show", "hide"]),
  githubVisibility: PropTypes.oneOf(["show", "hide"]),
  linkedInLink: PropTypes.string,
  portfolioLink: PropTypes.string,
  githubLink: PropTypes.string,
};

export default TeamCard;
