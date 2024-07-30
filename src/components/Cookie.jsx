import "../styles/Cookie.css";
import Button from "../components/Button";
import getRandom from "../helpers/getRandom";
import photos from "../data/photos.json";
import phrases from "../data/phrases.json";

const Cookie = ({ phrase, bg, setPhraseSelected, setBgSelected }) => {
  const handleClick = () => {
    const indexRandom = getRandom(phrases.length);
    const initalPhrase = phrases[indexRandom];
    const initialbg = photos[getRandom(photos.length)];

    setPhraseSelected(initalPhrase);
    setBgSelected(initialbg);
  };

  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <div className="phrase">
        <p>{phrase.phrase}</p>
        <Button onClick={handleClick} />
      </div>
      <p className="author">{phrase.author}</p>
    </div>
  );
};

export default Cookie;
