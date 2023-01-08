import { createContext, useState } from "react";

export const MemoryContext = createContext();

export const MemoryContextProvider = ({ children }) => {
  const [memories, setMemories] = useState(null);
  const [memory, setMemory] = useState(null);

  const value = {
    memories,
    setMemories,
    memory,
    setMemory,
  };

  return (
    <MemoryContext.Provider value={value}>{children}</MemoryContext.Provider>
  );
};
