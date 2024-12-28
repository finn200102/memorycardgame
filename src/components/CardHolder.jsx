import Card from "./Card";
import { fetchImageUrls } from "../api/imageService";
import { useEffect, useState } from "react";
import "../styles/CardHolder.css";
function CardHolder() {
  const [imageUrls, setImageUrls] = useState([]);
  // const apiEndpoint = "https://pokeapi.co/api/v2/pokemon/";
  //const urls = await fetchImageUrls();
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
        <Card key={url} url={url} />
      ))}
    </div>
  );
}

export default CardHolder;
