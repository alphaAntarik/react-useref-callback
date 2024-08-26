import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const enteredPlayerName = useRef();
  const [playerName, setPlayerName] = useState('');  
 

  function handleSubmit() {
  
    setPlayerName(enteredPlayerName.current.value)
    
  }

  return (
    <section id="player">
      <h2>Welcome { playerName?playerName : 'unknown entity'}</h2>
      <p>
        <input ref={enteredPlayerName} type="text" />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}

// useRef vs. useState:
// Triggering Re-renders: useState triggers a re-render when its value changes, making it ideal for state that affects the UI.
// No Re-rendering: useRef does not trigger a re-render when its value changes, which is useful for keeping track of values that 
// don’t need to cause a re - render.
