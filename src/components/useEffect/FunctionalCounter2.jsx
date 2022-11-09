import React from "react";


// Output to console after mounting and 3 button clicks:
// Functional count:  0
// Functional count:  0
// Functional count:  3
// Functional count:  3
// Functional count:  3
export function FunctionalCounter2() {
  const [count, setCount] = React.useState(0);
  const lastCountRef = React.useRef(count);

  const handleButton = () => {
    setCount(c => c + 1);
  };

  React.useEffect(() => {
    lastCountRef.current = count;
    setTimeout(() => {
      console.log("Functional count: ", lastCountRef.current);
    }, 3000)
  })

  return (
    <div>
      <p>Second functional counter: {count} </p>
      <button onClick={handleButton}>increment </button>
    </div>
  );
}
