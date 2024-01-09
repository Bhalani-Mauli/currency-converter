import "../App.css";

const Converter = () => {
  return (
    <div className="wrapper">
      <div className="text-wrapper">
        <label>Amount</label>
        <input type="number" placeholder="Amount" />
        <label>From</label>
        <select name="country">
          <option value="EUR">EUR</option>
          <option value="INR">INR</option>
        </select>
        <label>To</label>
        <select name="country">
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
        </select>
        <button className="btn-convert">Convert</button>
      </div>
    </div>
  );
};

export default Converter;
