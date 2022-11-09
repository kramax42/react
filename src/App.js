import { FunctionalCounter1 } from "./components/useEffect/FunctionalCounter1.jsx";
import { FunctionalCounter2 } from "./components/useEffect/FunctionalCounter2.jsx";
import { ClassCounter } from "./components/useEffect/ClassCounter.jsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Functional and class components</h1>
      <FunctionalCounter1 />
      <FunctionalCounter2 />
      <ClassCounter />
    </div>
  );
}
