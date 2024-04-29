import { useState } from "react";
import "./App.css";
import { FaStar } from "react-icons/fa";
import PopOver from "./component/PopOver";

function App() {
  const [rating, setrating] = useState(null);
  const [hover, sethover] = useState(null);
  return (
    <>
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => setrating(currentRating)}
            />
            <FaStar
              onMouseEnter={() => sethover(currentRating)}
              onMouseLeave={() => sethover(null)}
              className="star"
              color={currentRating <= (hover || rating) ? "#FFC107" : "#e4e5e9"}
              size={50}
            />
          </label>
        );
      })}
      <p>Your Rating is {rating}</p>
      <h1>Popover Example</h1>
      <PopOver
        trigger={<button>Click Me</button>}
        content={<p>This is the popover content.</p>}
      />
    </>
  );
}

export default App;
