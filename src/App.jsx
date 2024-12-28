import { useState } from "react";
import CardHolder from "./components/CardHolder";
import Score from "./components/Score";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [clickedImageUrls, setClickedImageUrls] = useState([]);
  const [difficulty, setDifficulty] = useState("10");

  const updateDifficult = (difficulty) => {
    setDifficulty(difficulty);
  };

  const handleCardClick = (url) => {
    // run game
    // check if url in clickedImageUrls
    if (clickedImageUrls.includes(url)) {
      setClickedImageUrls([]);
      setCount(0);
    } else {
      setClickedImageUrls((prevItems) => [...prevItems, url]);
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <>
      <header>
        <h1>Memory Game</h1>
      </header>
      <CardHolder onClick={handleCardClick} count={difficulty} />
      <Score
        score={count}
        difficulty={difficulty}
        updateDifficulty={updateDifficult}
      />
    </>
  );
}

export default App;
