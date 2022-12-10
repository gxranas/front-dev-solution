import React, {useState , createContext} from "react"

const InitialState = {
    name: "Sharmaine Olivia",
    phone: "09558369140",
    address: "Ph2423 Pkg1232 Bl3234 Lot8 New York Cubao, Manila City Philippines"
};

export const Context = createContext();

const Addresses = ({children}) => {
    const [state, setState] = useState(InitialState);
    
    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    )
}


export default Addresses