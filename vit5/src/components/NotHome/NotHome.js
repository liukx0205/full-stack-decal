import React, { useState, useEffect } from "react";
import "./NotHome.css"; // Import CSS file for styling

const NotHome = () => {
  const [counter, setCounter] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (counter > 5) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); 
    }
  }, [counter]);

  return (
    <div className="nothome-container">
      <h1>Not Home Page</h1>
      <h2>Counter: {counter}</h2>
      {showPopup && <h3>You passed 5!</h3>}
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
    </div>
  );
};

export default NotHome;