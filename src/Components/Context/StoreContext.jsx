import { createContext } from "react";
import { Food_lists } from "../../assets/assests";

 
 export const StoreContext = createContext(null)

 const StoreContextProvider = (props) => {
    const contextValue = {
          Food_lists
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
 }

 export default StoreContextProvider;