const Input = ({
  label,
  amount,
  selectedCurrency,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  amountDisable = false,
  currencyDisable = false,
}) => {
  return (
    <div className="sm:w-[80%] lg:w-[40%] mx-auto mt-5 rounded-xl bg-white">
      <div className="flex justify-between mt-5 my-2 p-4">
        <label className="text-2xl text-gray-400 ">{label}</label>
        <p className="text-2xl text-gray-400">Currency Type</p>
      </div>
      <div className="flex justify-between p-4">
        <input
          className="text-2xl outline-none"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => onAmountChange?.(Number(e.target.value))}
          disabled={amountDisable}
        />
        <select
          value={selectedCurrency}
          className=" sm:w-[40%] lg:w-[30%] rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          onChange={(e) => onCurrencyChange?.(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOption.map((currency, index) => (
            <option key={index} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Input;
