import PropTypes from "prop-types";
import "../styles/card.css";
function Card({ url, onClick }) {
  return (
    <div className="card" onClick={() => onClick(url)}>
      <img src={url} alt="" />
    </div>
  );
}

export default Card;

Card.propTypes = {
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
