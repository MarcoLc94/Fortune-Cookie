import { useState } from "react";
import phrases from "./data/phrases.json";
import getRandom from "./helpers/getRandom";
import Cookie from "./components/Cookie";
import photos from "./data/photos.json";
import "./styles/App.css";
import image from "../public/klipartz.com.png";

function App() {
  const indexRandom = getRandom(phrases.length);
  const [phraseSelected, setPhraseSelected] = useState(phrases[indexRandom]);
  const [bgSelected, setBgSelected] = useState(
    photos[getRandom(photos.length)]
  );

  const objStyles = {
    backgroundImage: `url(/photo${bgSelected}.jpeg)`,
  };

  return (
    <div style={objStyles}>
      <h1>Galleta de la fortuna</h1>
      <Cookie
        phrase={phraseSelected}
        bg={bgSelected}
        setPhraseSelected={setPhraseSelected}
        setBgSelected={setBgSelected}
      />
      <img
        src={image}
        alt="Manos abriendo una galleta de la fortuna"
        className="overlay-image"
      />
    </div>
  );
}

export default App;
