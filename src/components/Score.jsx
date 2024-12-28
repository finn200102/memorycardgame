import PropTypes from "prop-types";
function Score({ score, difficulty, updateDifficulty }) {
  const handleSubmit = () => {
    const inputValue = document.querySelector('input[type="number"]').value;
    console.log(updateDifficulty);
    updateDifficulty(inputValue);
  };
  return (
    <div className="score-holder">
      <p>Your score is: {score}</p>
      <div>
        <input type="number" defaultValue={difficulty} />
        <button onClick={handleSubmit}>Ok</button>
      </div>
    </div>
  );
}

export default Score;

Score.propTypes = {
  score: PropTypes.number.isRequired,
  difficulty: PropTypes.string.isRequired,
  updateDifficulty: PropTypes.func.isRequired,
};
