import { createContext, useState } from "react";

const LiveContext = createContext();

const initialValue = 5;

const LiveProvider = ({ children }) => {
  const [life, setLife] = useState(initialValue);

  const data = { life, setLife };
  return <LiveContext.Provider value={data}>{children}</LiveContext.Provider>;
};

export { LiveProvider };
export default LiveContext;
