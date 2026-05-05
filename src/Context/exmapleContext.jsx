import { createContext, useState, useContext } from "react";

//create context = (Global box to store shared data)
export const DataContext = createContext();

//Provider Component = (puts data into the box)
export const DataProvider = ({ children }) => {

    const [data, setData] = useState("Kandati Ranjith Kumar Reddy man!");
    //custom component 
    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};

//custom hook = (This makes accessing context data easy in any component)
export const useData = () => useContext(DataContext);

// Life Cycle of Context=
// *****
// Create Context
// Provider Function
// Custom Hook
// Custom Component - extrenal component that uses data (ex:FromContext.jsx)
//****

// 1️⃣ createContext()        → creates the box
// 2️⃣ DataProvider           → fills the box
// 3️⃣ useState()             → actual shared data
// 4️⃣ Provider value         → shares data
// 5️⃣ children               → allows components to access
// 6️⃣ useData()              → reads data from the box
