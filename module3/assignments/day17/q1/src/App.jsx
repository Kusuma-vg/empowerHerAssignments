import React, { useState, useMemo, useCallback } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [counter, setCounter] = useState(0);

  // Large product list (simulated)
  const products = [
    { id: 1, name: "Laptop", price: 800 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Tablet", price: 300 }
  ];

  /* ---------------- useMemo ---------------- */
  // Total price is recalculated ONLY when products change
  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return products.reduce((sum, product) => sum + product.price, 0);
  }, [products]);

  /* ---------------- useCallback ---------------- */
  // Function reference stays the same across renders
  const handleProductSelect = useCallback((product) => {
    console.log("Selected product:", product.name);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>
        Increment Counter
      </button>

      <h3>Total Price: ₹{totalPrice}</h3>

      <ProductList
        products={products}
        onSelectProduct={handleProductSelect}
      />
    </div>
  );
}

export default App;
