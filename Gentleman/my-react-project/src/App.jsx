import { useEffect, useMemo, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Gentleman");

  const changedName = useMemo(() => {
    return `Gentleman ${name}`;
  }, [name]);

  const handleClick = () => {
    setName("Alan");
  };

  return (
    <>
      <div>
        <h1>{name}</h1>
      </div>
      <button onClick={handleClick}>Click here to change name</button>
      {changedName}
    </>
  );
}

export default App;
