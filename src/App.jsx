import { useState } from "react";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import Input from "./component/Input";

function App() {
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("inr");
  const [toCurrency, setToCurrency] = useState("usd");
  const currencyRates = useCurrencyInfo(fromCurrency);
  const currencyTypes = Object.keys(currencyRates);

  const currencyCoverted = () => {
    if (!currencyRates[toCurrency]) return;
    const converted = (fromAmount * currencyRates[toCurrency]).toFixed(3);
    setToAmount(converted);
  };

  const handleSwap = () => {
    // Used to swap the currencies
    setFromAmount(toAmount);
    setToAmount(0);
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="flex flex-col relative">
      <Input
        label={"From"}
        amount={fromAmount}
        onAmountChange={setFromAmount}
        currencyOption={currencyTypes}
        onCurrencyChange={setFromCurrency}
        selectedCurrency={fromCurrency}
      />
      <div className="w-full flex absolute justify-center mt-42 ">
        <button
          className="w-24 font-medium  p-2 my-auto cursor-pointer rounded-lg text-center bg-amber-400"
          onClick={handleSwap}
        >
          Swap
        </button>
      </div>
      <Input
        label={"To"}
        amount={toAmount}
        onAmountChange={setToAmount}
        currencyOption={currencyTypes}
        onCurrencyChange={setToCurrency}
        selectedCurrency={toCurrency}
        amountDisable
      />
      <div className="w-full mt-4 flex justify-center text-center">
        <button
          className="w-[42%] cursor-pointer rounded-md  font-medium  text-2xl bg-amber-400"
          onClick={currencyCoverted}
        >
          Coverted {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
        </button>
      </div>
    </div>
  );
}

export default App;
