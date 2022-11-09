import React from "react";

export function FunctionalCounter() {
  const [count, setCount] = React.useState(0);

  const handleButton = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
      <p> Functional counter: {count} </p>
      <button onClick={handleButton}>increment </button>
    </div>
  );
}
