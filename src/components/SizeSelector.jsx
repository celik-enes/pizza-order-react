function SizeSelector({ size, setSize }) {
  return (
    <div className="option-group">
      <h2>📏 Boyut Seç</h2>

      <label>
        <input
          type="radio"
          name="size"
          value="small"
          checked={size === "small"}
          onChange={() => setSize("small")}
        />
        Small
      </label>

      <label>
        <input
          type="radio"
          name="size"
          value="medium"
          checked={size === "medium"}
          onChange={() => setSize("medium")}
        />
        Medium
      </label>

      <label>
        <input
          type="radio"
          name="size"
          value="large"
          checked={size === "large"}
          onChange={() => setSize("large")}
        />
        Large
      </label>
    </div>
  );
}

export default SizeSelector;
