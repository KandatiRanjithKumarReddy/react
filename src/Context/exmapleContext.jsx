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
// Custom Component - extrenal component that uses data (ex:FromContext.jsx)
// Custom Hook
//****

// 1️⃣ createContext()        → creates the box
// 2️⃣ DataProvider           → fills the box
// 3️⃣ useState()             → actual shared data
// 4️⃣ Provider value         → shares data
// 5️⃣ children               → allows components to access
// 6️⃣ useData()              → reads data from the box



// ## Problems with Context API

// The Context API is useful for sharing data between components
// without passing props manually. However, it has some limitations:

// 1. Unnecessary updates:
//    When context data changes, all components using that context may update.

// 2. Frequent changes:
//    Context is not ideal for data that changes very frequently.

// 3. Harder to understand:
//    It can be difficult to know where a component gets its data from.

// 4. Large applications:
//    Using many contexts can make the code difficult to organize and maintain.

// 5. Testing:
//    Components that depend on Context may require additional setup during testing.

// 6. Hidden dependencies:
//    Context removes prop drilling, but it can make data dependencies less visible.

// In short:
// Context API is great for small, shared data, but using it for everything
// can make a large application harder to manage.


// ## Solutions to Context API Problems

// 1. Unnecessary updates:
//    Use Zustand or Redux so only components using the changed state re-render.

// 2. Frequent changes:
//    Store frequently changing data in Zustand/Redux instead of Context API.

// 3. Harder to understand:
//    Keep state organized in separate stores or slices with clear names.

// 4. Large applications:
//    Split state into multiple stores/modules to keep the code maintainable.

// 5. Testing:
//    Test stores independently without wrapping components in multiple providers.

// 6. Hidden dependencies:
//    Import only the required state or actions, making dependencies easier to track.

// In short:
// Context API is great for small apps.
// For large applications or frequently changing state,
// use Zustand or Redux for better performance and maintainability.
