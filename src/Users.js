import React, {useState , createContext} from "react"

const InitialState = {
    username: "sharoff",
    name: "Sharmaine Olivia",
    email: "sharmainecflorano@gmail.com",
    phone: "09558369140",
    gender: "Female",
    birthday: "12-21-2022",
};

export const Context = createContext();


const Users = ({children}) => {
    const [state, setState] = useState(InitialState);
    
    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    )
}


export default Users