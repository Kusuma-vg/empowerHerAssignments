import React, { useState, lazy, Suspense } from "react";

const HeavyComponent = lazy(() => import("./components/HeavyComponent"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment Counter
      </button>

      <Suspense fallback={<p>Loading Heavy Component...</p>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

export default App;
