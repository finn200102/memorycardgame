import PropTypes from "prop-types";
import "../styles/card.css";
function Card({ url }) {
  return (
    <div className="card">
      <img src={url} alt="" />
    </div>
  );
}

export default Card;

Card.propTypes = {
  url: PropTypes.string.isRequired,
};
