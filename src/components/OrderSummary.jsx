function OrderSummary({ pizza, size, toppings, onComplete }) {
  if (!pizza) return null;

  const basePrice = 100;
  const sizePrices = {
    small: 0,
    medium: 20,
    large: 40,
  };

  const totalPrice =
    basePrice + sizePrices[size] + toppings.length * 10;

  return (
    <div className="order-summary floating">
      <h3>🧾 Sipariş Özeti</h3>

      <p>
        <strong>Pizza:</strong> {pizza}
      </p>
      <p>
        <strong>Boyut:</strong> {size}
      </p>
      <p>
        <strong>Ekstralar:</strong>{" "}
        {toppings.length > 0 ? toppings.join(", ") : "Yok"}
      </p>

      <hr />

      <p>
        <strong>Toplam:</strong> {totalPrice} ₺
      </p>

      <button
        className="complete-btn"
        onClick={onComplete}
      >
        Siparişi Tamamla
      </button>
    </div>
  );
}

export default OrderSummary;
