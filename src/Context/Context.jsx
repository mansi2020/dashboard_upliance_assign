import { createContext, useState } from "react";

// create common context
const UserContext = createContext({});

 function ContextProvider({ children }) {
    const [counter, setCounter] = useState(0);
    const [data,setData] = useState({});
   
    return (
      <UserContext.Provider
        value={{
            counter, setCounter,data,setData
        }}
      >
        {children}
      </UserContext.Provider>
    );
  }
  
  export { UserContext, ContextProvider };
  