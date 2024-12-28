import Card from "./Card";
import { fetchImageUrls } from "../api/imageService";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../styles/CardHolder.css";
function CardHolder({ onClick, count }) {
  const [imageUrls, setImageUrls] = useState([]);

  const shuffle = (array) => {
    // shuffel array with Fisher-Yates (Knuth) shuffle algorithm
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  useEffect(() => {
    setImageUrls((prevUrls) => {
      if (prevUrls.length > 0) {
        return shuffle(prevUrls);
      }
      return prevUrls;
    });
  }, [onClick]);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const urls = await fetchImageUrls(count);
        setImageUrls(urls);
      } catch (error) {
        console.error("Fetching did not work", error);
      }
    };
    fetchUrls();
  }, [count]);

  return (
    <div className="card-holder">
      {imageUrls.map((url) => (
        <Card key={url} url={url} onClick={onClick} />
      ))}
    </div>
  );
}

export default CardHolder;

CardHolder.propTypes = {
  onClick: PropTypes.func.isRequired,
  count: PropTypes.string.isRequired,
};
