# React Library 📚

A hands-on React learning project that demonstrates core React concepts with working examples.

---

## 🛠 Tech Stack

- **React 19** — UI library
- **Vite** — Build tool & dev server
- **React Router DOM** — Client-side routing
- **React Hook Form** — Form handling library
- **Axios** — HTTP client for API calls
- **Zustand** — Lightweight state management

---

## 📖 Concepts Used

### 1. JSX

**What:** A syntax that lets you write HTML-like code inside JavaScript.

**Real-world example:** Like writing a shopping list inside a notebook — you mix the item names (HTML) with notes about quantity (JavaScript).

```jsx
<h1>Hello, {userName}</h1>
```

> Used in: Every component file in this project.

---

### 2. Functional Components

**What:** JavaScript functions that return JSX. They are the building blocks of a React app.

**Real-world example:** Like LEGO bricks — each brick (component) has its own shape and purpose, and you snap them together to build something bigger.

```jsx
function RR1() {
  return (
    <div>
      <h1>React Router 1</h1>
    </div>
  );
}
```

> Used in: `Display.jsx`, `Use_state.jsx`, `RR.jsx`, `FromContext.jsx`, and every other component.

---

### 3. Props

**What:** Data passed from a parent component to a child component. Props are read-only — the child can use them but can't change them.

**Real-world example:** Like a waiter handing a menu to a customer — the waiter (parent) gives the menu (props), and the customer (child) reads it but can't rewrite it.

```jsx
// Parent passes data
<Lp name="Ranjith Reddy" />

// Child receives and uses it
function Lp(props) {
  return <h1>This Is coming from props {props.name} Page!</h1>;
}
```

> Used in: `App.jsx` → `Lp.jsx`

---

### 4. useState

**What:** A Hook that adds "memory" to your component. When the state changes, the component re-renders with the new value.

**Real-world example:** Like a scoreboard at a cricket match — every time a run is scored, the board updates to show the new score.

```jsx
const [butoncount, setbuttoncount] = useState(0);

<button onClick={() => setbuttoncount(butoncount + 1)}>Click Me</button>
<h1>Button Clicked {butoncount} times</h1>
```

> Used in: `Use_state.jsx` (click counter), `Two_way_binding.jsx` (form input), `Usecallback.jsx` (counter), `Usereff.jsx` (counter)

---

### 5. useEffect

**What:** A Hook that runs code after the component renders. Used for side effects like fetching data, logging, or setting up subscriptions.

**Real-world example:** Like setting an alarm — after you go to bed (component renders), the alarm (effect) starts running in the background.

```jsx
// Runs once when component mounts
useEffect(() => {
  console.log("page Reloaded");
}, []);

// Runs every time butoncount changes
useEffect(() => {
  console.log(`button clicked ${butoncount} Times`);
}, [butoncount]);
```

> Used in: `Use_effect.jsx` (logging on mount & on state change), `Display.jsx` (fetching API data on mount)

---

### 6. useRef

**What:** A Hook that gives you a "box" to hold a value that persists across re-renders — without causing a re-render when it changes. Also used to directly access DOM elements.

**Real-world example:** Like a sticky note on your desk — you can write on it and read it anytime, but writing on it doesn't make you restart your work.

```jsx
const reference = useRef({ name: "ranjith Kumar reddy", age: 21 });
// reference.current stays the same object across re-renders
// Unlike useState, changing useRef does NOT trigger a re-render
```

> Used in: `Usereff.jsx` (persisting a reference across renders to prove it keeps the same memory address)

---

### 7. useCallback

**What:** A Hook that memorizes a function so it doesn't get recreated on every render. Returns the same function reference until its dependencies change.

**Real-world example:** Like saving a phone number in your contacts — instead of re-dialing the full number every time, you just tap the saved contact.

```jsx
const temp = useCallback(() => {
  setState((state) => state + 1);
}, [state < 2 ? 0 : state]);
// Function is cached and only recreated when the dependency changes
```

> Used in: `Usecallback.jsx` (caching the increment function and comparing references across renders)

---

### 8. Context API (createContext, useContext, Provider)

**What:** A way to share data across many components without passing props through every level. You create a "context", provide it at the top, and consume it anywhere below.

**Real-world example:** Like a school announcement over the speaker system — the principal (Provider) makes an announcement once, and every classroom (component) hears it directly without passing a note room to room.

```jsx
// 1. Create the context (the box)
export const DataContext = createContext();

// 2. Provider (fills the box with data)
export const DataProvider = ({ children }) => {
  const [data, setData] = useState("Kandati Ranjith Kumar Reddy man!");
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

// 3. Custom Hook (easy way to read from the box)
export const useData = () => useContext(DataContext);

// 4. Consume in any component
const { data } = useData();
```

> Used in: `exmapleContext.jsx` (provider + custom hook), `FromContext.jsx` (consumer)

---

### 9. Custom Hooks

**What:** Your own reusable functions that use React hooks inside them. They start with `use` and let you extract and share logic between components.

**Real-world example:** Like creating a shortcut on your phone — instead of navigating through 5 menus every time, you create one shortcut that does it all.

```jsx
// Custom hook wraps useContext for easy access
export const useData = () => useContext(DataContext);

// Any component can now use it simply:
const { data } = useData();
```

> Used in: `exmapleContext.jsx` (`useData` custom hook)

---

### 10. React Router (BrowserRouter, Routes, Route, Link)

**What:** A library that enables navigation between different pages/views in a single-page app without full page reloads.

**Real-world example:** Like chapters in a book — you can jump to any chapter (page) using the table of contents (links) without closing and reopening the book (reloading the browser).

```jsx
// main.jsx — Wrap app with BrowserRouter
<BrowserRouter>
  <App />
</BrowserRouter>

// RR.jsx — Navigation links
<Link to='/RR1'>Lets Go to RR1</Link>

// App.jsx — Define routes
<Routes>
  <Route path='/' element={<h1>This Is Home Page!</h1>} />
  <Route path='/RR1' element={<RR1 />} />
  <Route path='*' element={<h1>404 - Page Not Found</h1>} />
</Routes>
```

> Used in: `main.jsx` (BrowserRouter), `RR.jsx` (Link navigation), `App.jsx` (Routes & Route)

---

### 11. Lazy Loading (lazy + Suspense)

**What:** A technique to load components only when they are needed, instead of loading everything upfront. `lazy()` loads the component on demand, and `Suspense` shows a fallback (like a spinner) while it loads.

**Real-world example:** Like a Netflix show — episodes aren't downloaded all at once. Each episode loads only when you click play.

```jsx
const Display = lazy(() => import('./Components/Display'));

<Suspense fallback={<LoadingSpinner />}>
  <Display />
</Suspense>
```

> Used in: `App.jsx` (all page components are lazy loaded)

---

### 12. Two-Way Binding

**What:** Connecting an input field to a state variable so that typing in the input updates the state, and the state value is reflected back in the input.

**Real-world example:** Like a mirror — what you do in front of it (type in input) is instantly shown back to you (state updates the display).

```jsx
const [email, setEmail] = useState("");

<input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```

> Used in: `Two_way_binding.jsx` (email & phone inputs with form submission)

---

### 13. List Rendering (map + key)

**What:** Using JavaScript's `.map()` method to loop over an array and render a component for each item. The `key` prop helps React track which items changed.

**Real-world example:** Like a class attendance register — each student's name is read out one by one from the list, and the roll number (key) identifies who is who.

```jsx
response.map((user) => (
  <h3 key={user.id}>{user.name}</h3>
))
```

> Used in: `Display.jsx` (rendering user names from API data)

---

### 14. Conditional Rendering

**What:** Showing or hiding elements based on a condition, often using the logical AND (`&&`) operator or ternary expressions.

**Real-world example:** Like a traffic light — if it's green (condition true), cars go. If red, they stop. The display changes based on the current condition.

```jsx
{submittedData && (
  <div>
    <h3>Email: {submittedData.email}</h3>
    <h3>Phone: {submittedData.phone}</h3>
  </div>
)}
```

> Used in: `Two_way_binding.jsx` (show submitted data only after form submission)

---

### 15. API Calls with Axios

**What:** Axios is an HTTP client library used to make API requests (GET, POST, etc.) from your React app. Combined with `useEffect`, it fetches data when a component loads.

**Real-world example:** Like ordering food through a delivery app — you place the order (API request), wait for it to arrive (async/await), and then eat it (render the data).

```jsx
useEffect(() => {
  const getData = async () => {
    try {
      const responses = await axios.get("https://jsonplaceholder.typicode.com/users");
      Setresponse(responses.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  getData();
}, []);
```

> Used in: `Display.jsx` (fetching users list from a public API)

---

### 16. React Hook Form

**What:** A third-party library that makes form handling easy — register inputs, validate them, and handle submission with minimal code and better performance.

**Real-world example:** Like a smart application form that checks each field as you fill it and highlights errors instantly — "Name is required", "Enter a valid email".

```jsx
const { register, handleSubmit, formState: { errors } } = useForm();

<input {...register("name", {
  required: "Fill This Field",
  minLength: { value: 3, message: "Name Should be at Least 3 Chars" }
})} />
{errors?.name && <p>{errors.name.message}</p>}
```

> Used in: `React_hook_form.jsx` (registration form with name, email, password, phone, gender, skills validation)

---

### 17. Zustand (State Management)

**What:** A small, fast state management library. You create a "store" with state and actions, then use it in any component — no Provider wrapper needed.

**Real-world example:** Like a shared whiteboard in an office — anyone can walk up and read or update it, no need to pass notes between desks.

```jsx
// Store — Zustand_store.js
export const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

// Component — Zustand.jsx
const { count, increment, decrement } = useStore();
```

> Used in: `Zustand_store.js` (store definition), `Zustand.jsx` (counter component)

---

### 18. Destructuring

**What:** A JavaScript shorthand to unpack values from objects or arrays into individual variables.

**Real-world example:** Like opening a gift box with multiple items — instead of carrying the whole box around, you take out each item and hold it directly.

```jsx
// Object destructuring
const { count, increment, decrement } = useStore();

// Array destructuring (useState returns an array)
const [count, setCount] = useState(0);
```

> Used in: Every component that uses hooks or receives props.

---

### 19. StrictMode

**What:** A React wrapper that helps find potential problems during development. It runs extra checks (like double-rendering) but doesn't affect production.

**Real-world example:** Like a spell-checker in a document editor — it doesn't change your text, but it underlines mistakes so you can fix them.

```jsx
<StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</StrictMode>
```

> Used in: `main.jsx`

---

### 20. Async / Await

**What:** JavaScript syntax that makes working with asynchronous operations (like API calls) look like normal, top-to-bottom code instead of nested callbacks.

**Real-world example:** Like ordering chai at a tea stall — you place the order (async call), wait for it to be ready (await), and then drink it. You don't have to stand confused juggling callbacks.

```jsx
const getData = async () => {
  try {
    const responses = await axios.get("https://jsonplaceholder.typicode.com/users");
    Setresponse(responses.data);
  } catch (error) {
    console.log(error.message);
  }
};
```

> Used in: `Display.jsx` (fetching data from API)

---

### 21. Fragments (<> </>)

**What:** A way to return multiple elements from a component without adding an extra `<div>` to the DOM.

**Real-world example:** Like stapling pages together — the staple (fragment) holds the pages (elements) together without adding a cover (extra div).

```jsx
return (
  <>
    <h1>Use Callback</h1>
    <p>count: {state}</p>
    <button onClick={temp}>+</button>
  </>
);
```

> Used in: `Usecallback.jsx`, `FromContext.jsx`, `RR.jsx`, and most other components.

---

## 📁 Folder Structure

```
src/
├── Components/             # All UI components
│   ├── Display.jsx            # API data fetching & list rendering
│   ├── Two_way_binding.jsx    # Two-way binding demo
│   ├── React_hook_form.jsx    # React Hook Form validation demo
│   ├── Use_state.jsx          # useState demo
│   ├── Use_effect.jsx         # useEffect demo
│   ├── Usereff.jsx            # useRef demo
│   ├── Usecallback.jsx        # useCallback demo
│   ├── FromContext.jsx        # Context API consumer
│   ├── Zustand.jsx            # Zustand state demo
│   ├── RR.jsx                 # Navigation with React Router Links
│   ├── RR1.jsx / RR2.jsx / RR3.jsx  # Route page components
│   └── LoadingSpinner.jsx     # Loading fallback for Suspense
├── Context/
│   └── exmapleContext.jsx     # Context API (provider + custom hook)
├── props/
│   └── Lp.jsx                 # Child component receiving props
├── store/
│   └── Zustand_store.js       # Zustand store definition
├── styles/
│   └── LoadingSpinner.css     # Spinner styles
├── App.jsx                    # Main app with lazy loading & routing
├── App.css                    # App styles
├── main.jsx                   # Entry point (StrictMode, BrowserRouter)
└── index.css                  # Global styles
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

---
