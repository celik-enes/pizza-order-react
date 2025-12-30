function ToppingSelector({ toppings, setToppings }) {
  const allToppings = ["Cheese", "Olives", "Mushrooms"];

  const handleChange = (topping) => {
    if (toppings.includes(topping)) {
      setToppings(toppings.filter((t) => t !== topping));
    } else {
      setToppings([...toppings, topping]);
    }
  };

  return (
    <div className="option-group">
      <h2>🧀 Ekstra Malzemeler</h2>

      {allToppings.map((topping) => (
        <label key={topping}>
          <input
            type="checkbox"
            checked={toppings.includes(topping)}
            onChange={() => handleChange(topping)}
          />
          {topping}
        </label>
      ))}
    </div>
  );
}

export default ToppingSelector;
