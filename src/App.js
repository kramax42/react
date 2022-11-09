import { FunctionalCounter } from "./components/FunctionalCounter.jsx";
import { ClassCounter } from "./components/ClassCounter.jsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Functional and class components</h1>
      <FunctionalCounter />
      <ClassCounter />
    </div>
  );
}
