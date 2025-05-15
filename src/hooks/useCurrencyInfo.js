import { useState, useEffect } from "react";
import { currencyApi } from "../utility/api";

function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});

  if (!baseCurrency) return;
  useEffect(() => {
    fetch(currencyApi + baseCurrency + ".json")
      .then((res) => res.json())
      .then((res) => {
        setData(res[baseCurrency] || {});
      })
      .catch((err) => {
        console.error("Error fetching currency info:", err);
        setData({});
      });
  }, [baseCurrency]);

  return data;
}

export default useCurrencyInfo;
