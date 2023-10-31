import { useState, createContext } from "react";

const ctx = {
  user: null,
};

export const Context = createContext(ctx);

export const ContextProvider = ({ children }) => {
  const [context, setContext] = useState(ctx);
  return (
    <div
      style={{
        borderStyle: "solid",
        borderColor: "black",
        padding: 20,
      }}
    >
      <Context.Provider value={[context, setContext]}>
        {children}
      </Context.Provider>
    </div>
  );
};
