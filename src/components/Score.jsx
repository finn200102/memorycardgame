import PropTypes from "prop-types";
function Score({ score }) {
  return (
    <div className="score-holder">
      <p>Your score is: {score}</p>
    </div>
  );
}

export default Score;

Score.propTypes = {
  score: PropTypes.number.isRequired,
};
