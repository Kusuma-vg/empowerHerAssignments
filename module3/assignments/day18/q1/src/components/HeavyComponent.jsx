import React from "react";

const HeavyComponent = () => {
  console.log("HeavyComponent rendered");

  return (
    <div style={{ marginTop: "20px", padding: "20px", border: "1px solid gray" }}>
      <h3>Heavy UI Component</h3>
      <p>This simulates a heavy section of the UI.</p>
    </div>
  );
};

export default React.memo(HeavyComponent);
