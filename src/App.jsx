import { useState } from "react";
import PizzaList from "./components/PizzaList";
import SizeSelector from "./components/SizeSelector";
import ToppingSelector from "./components/ToppingSelector";
import OrderSummary from "./components/OrderSummary";
import Toast from "./components/Toast";

function App() {
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [size, setSize] = useState("medium");
  const [toppings, setToppings] = useState([]);
  const [showToast, setShowToast] = useState(false);

  const handleCompleteOrder = () => {
    setSelectedPizza(null);
    setSize("medium");
    setToppings([]);

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="container">
      <h1>🍕 Pizza Order</h1>

      <div className="layout">
        <div className="left">
          <PizzaList
            selectedPizza={selectedPizza}
            setSelectedPizza={setSelectedPizza}
          />

          <SizeSelector size={size} setSize={setSize} />

          <ToppingSelector toppings={toppings} setToppings={setToppings} />
        </div>
      </div>

      {/* Floating Sipariş Özeti */}
      <OrderSummary
        pizza={selectedPizza}
        size={size}
        toppings={toppings}
        onComplete={handleCompleteOrder}
      />

      {/* Toast */}
      {showToast && <Toast />}
    </div>
  );
}

export default App;
