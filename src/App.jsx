import { useState } from "react";
import CardHolder from "./components/CardHolder";
import Score from "./components/Score";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [clickedImageUrls, setClickedImageUrls] = useState([]);

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
      <CardHolder onClick={handleCardClick} />
      <Score score={count} />
    </>
  );
}

export default App;
