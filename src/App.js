import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🙂": "smiling",
  "❤️": "love",
  "😔": "sad",
  "😡": "angry",
  "🫡": "salute / hats off",
  "🤞": "fingers crossed / nervous"
};

export default function App() {
  const [meaning, setMeaning] = useState("");

  function displayMeaning(emoji) {
    if (emoji === "") {
      setMeaning("");
    } else if (emojiDictionary[emoji] !== undefined) {
      setMeaning(emojiDictionary[emoji]);
    } else {
      setMeaning("meaning not present in database");
    }
  }

  function emojiInputHandler(event) {
    displayMeaning(event.target.value);
  }

  function emojiClickHandler(emoji) {
    displayMeaning(emoji);
  }

  return (
    <div className="App">
      <h1> inside Ouuut </h1>
      <input type="text" onChange={emojiInputHandler} />
      <h2>
        <span> {meaning} </span>{" "}
      </h2>
      <h3> emojis we know </h3>
      <ul>
        {Object.keys(emojiDictionary).map((emoji) => {
          return (
            <li className="emojiIcon" onClick={() => emojiClickHandler(emoji)}>
              {emoji}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
