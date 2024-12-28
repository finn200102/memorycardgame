import Card from "./Card";
import { fetchImageUrls } from "../api/imageService";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../styles/CardHolder.css";
function CardHolder({ onClick }) {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const urls = await fetchImageUrls();
        setImageUrls(urls);
      } catch (error) {
        console.error("Fetching did not work", error);
      }
    };
    fetchUrls();
  }, []);

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
};
