import { createContext, useState } from "react";

export const MemoryContext = createContext();

export const MemoryContextProvider = ({ children }) => {
  const [memories, setMemories] = useState(null);

  const value = {
    memories,
    setMemories,
  };

  return (
    <MemoryContext.Provider value={value}>{children}</MemoryContext.Provider>
  );
};
