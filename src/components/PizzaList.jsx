import margherita from "../assets/margherita.jpg";
import pepperoni from "../assets/pepperoni.jpg";
import veggie from "../assets/veggie.jpg";

function PizzaList({ selectedPizza, setSelectedPizza }) {
  const pizzas = [
    { name: "Margherita", image: margherita },
    { name: "Pepperoni", image: pepperoni },
    { name: "Veggie", image: veggie },
  ];

  return (
    <div>
      <h2>🍕 Pizza Seç</h2>

      {pizzas.map((pizza) => (
        <div
          key={pizza.name}
          className={
            selectedPizza === pizza.name
              ? "pizza-card selected"
              : "pizza-card"
          }
        >
          <img src={pizza.image} alt={pizza.name} width="120" />

          {/* Pizza adı resmin altında */}
          <p className="pizza-name">{pizza.name}</p>

          <button onClick={() => setSelectedPizza(pizza.name)}>
            Seç
          </button>
        </div>
      ))}

      {selectedPizza && (
        <p style={{ textAlign: "center" }}>
          Seçilen Pizza: <strong>{selectedPizza}</strong>
        </p>
      )}
    </div>
  );
}

export default PizzaList;
