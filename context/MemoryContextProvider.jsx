import { createContext, useState } from "react";

export const MemoryContext = createContext();

export const MemoryContextProvider = ({ children }) => {
  const [memories, setMemories] = useState(null);
  const [count, setCount] = useState(0);

  const value = {
    memories,
    setMemories,
    count,
    setCount,
  };

  return (
    <MemoryContext.Provider value={value}>{children}</MemoryContext.Provider>
  );
};
