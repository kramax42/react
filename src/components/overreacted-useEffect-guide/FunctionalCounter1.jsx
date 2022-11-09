import React from "react";


// Output to console after mounting and 3 button clicks:
// Functional count:  0
// Functional count:  0
// Functional count:  1
// Functional count:  2
// Functional count:  3
export function FunctionalCounter1() {
  const [count, setCount] = React.useState(0);

  const handleButton = () => {
    setCount(c => c + 1);
  };

  React.useEffect(() => {
    setTimeout(() => {
      console.log("Functional count: ", count);
    }, 3000)
  })

  return (
    <div>
      <p>First functional counter: {count} </p>
      <button onClick={handleButton}>increment </button>
    </div>
  );
}
