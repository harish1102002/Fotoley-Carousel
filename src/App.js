import "./styles.css";
import i1 from "../public/images/india.jpg";
import i2 from "../public/images/indonesia.jpg";
import i3 from "../public/images/thai.jpg";
import i4 from "../public/images/italy.jpg";
import i5 from "../public/images/andaman.jpg";
import { useState, useEffect } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const places = [
  [i1, "India", 0],
  [i2, "Indonesia", 1],
  [i3, "Thailand", 2],
  [i4, "Italy", 3],
  [i5, "Andaman", 4]
];
const data = [
  "The rich cultural heritage and history of India is reflected in its regal lineage. The magnificent forts and palaces are a reminder of the bygone eras, mystical kingdoms & rulers.",
  "These islands offer a varied range of adventures and scenic beauty. Derawan Islands are amongst the most beautiful island in Indonesia. From the sublime sea caves to the lavish resorts and lakes, this island paradise is one of the hidden beautiful places in Indonesia",
  "Thailand is one of the prettiest South-Asian countries, which is why Thailand tourism has increased over time. Apart from the attractions of the country's capital city - Bangkok, Thailand is dotted with rainforests, pretty white sand beaches, amazing taverns, beautiful resorts, and many historical temples",
  "Italy is a beautiful country, globally loved for offering an eclectic blend of tourist attractions. Tourists, on one hand, love to enjoy amazing the Roman ruins of Pompeii, Rome, and Herculaneum, and on the other, can't resist visiting Venice and Tuscany for their romantic appeal.",
  "Visiting Andaman would be incomplete without visiting Long Island. This Island is one of the best travel destinations to visit for a wonderful beach vacation. Caves, beautiful beaches, rolling hills, evergreen forests and stunning marine ecosystem makes Long Island a place worth spending a day."
];
export default function App() {
  const [ind, setind] = useState(0);
  const [c, setc] = useState(1);
  useEffect(() => {
    if (c) {
      const tim = setTimeout(() => {
        setind((ind + 1) % 5);
      }, 3000);
      return () => clearTimeout(tim);
    }
  }, [ind, c]);

  return (
    <div className="App">
      <h1>Heaven on Earth</h1>
      <div className="exp">
        <img className="full" src={places[ind][0]}></img>
        <p>
          <h1>{places[ind][1]}</h1>
          {data[ind]}
        </p>
      </div>
      <br />
      <div className="all">
        <div className="small">
          {places.map((p) => (
            <img
              alt="hi"
              className="ins"
              onClick={function () {
                setind(p[2]);
              }}
              style={{ filter: p[2] !== ind ? "grayscale(100%)" : "none" }}
              src={p[0]}
            ></img>
          ))}
        </div>
        <NavigateBeforeIcon
          className="movep"
          onClick={function () {
            setind(ind - 1 < 0 ? 4 : ind - 1);
          }}
        />
        <NavigateNextIcon
          className="moven"
          onClick={function () {
            setind((ind + 1) % 5);
          }}
        />
        <PlayCircleIcon
          onClick={function () {
            c ? setc(0) : setc(1);
          }}
          className="play"
        />
      </div>
    </div>
  );
}
