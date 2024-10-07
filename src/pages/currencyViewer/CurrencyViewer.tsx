import React, { useState } from "react";
import axios from "axios";
import { format, parseISO, isBefore, isAfter } from "date-fns";
import CurrencySelector from "./components/CurrencySelector";
import DateSelector from "./components/DateSelector";
import ErrorMessage from "./components/ErrorMessage";
import ExchangeRateTable from "./components/ExchangeRateTable";
import FetchButton from "./components/FetchButton";

interface ExchangeRate {
  date: string;
  rate: number;
}

const CACHE: { [key: string]: ExchangeRate[] } = {};

const CurrencyViewer: React.FC = () => {
  const [currency, setCurrency] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [data, setData] = useState<ExchangeRate[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const apiKey = "L5R506UG7G86FB5X";

  const handleFetch = async () => {
    setError("");
    setData([]);

    if (!currency) {
      setError("Please select a currency code.");
      return;
    }

    if (!startDate || !endDate) {
      setError("Please select both start and end dates.");
      return;
    }

    const start = parseISO(startDate);
    const end = parseISO(endDate);

    if (isAfter(start, end)) {
      setError("Start date cannot be after end date.");
      return;
    }

    const cacheKey = `${currency.toUpperCase()}_${startDate}_${endDate}`;
    if (CACHE[cacheKey]) {
      setData(CACHE[cacheKey]);
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(`https://www.alphavantage.co/query`, {
        params: {
          function: "FX_DAILY",
          from_symbol: currency.toUpperCase(),
          to_symbol: "USD",
          outputsize: "full",
          apikey: apiKey,
        },
      });

      if (response.data["Error Message"]) {
        setError("Invalid currency code.");
        setData([]);
      } else if (response.data["Note"]) {
        setError("API call limit reached. Please try again later.");
        setData([]);
      } else {
        const timeSeries = response.data["Time Series FX (Daily)"];
        if (!timeSeries) {
          setError("Unexpected API response.");
          setData([]);
        } else {
          const filteredData: ExchangeRate[] = Object.keys(timeSeries)
            .filter((date) => {
              const current = parseISO(date);
              return (
                (isAfter(current, start) ||
                  current.getTime() === start.getTime()) &&
                (isBefore(current, end) || current.getTime() === end.getTime())
              );
            })
            .map((date) => ({
              date,
              rate: parseFloat(timeSeries[date]["4. close"]),
            }))
            .sort((a, b) => (a.date > b.date ? 1 : -1));

          if (filteredData.length === 0) {
            setError("No data available for the selected range.");
          } else {
            setData(filteredData);
            CACHE[cacheKey] = filteredData;
          }
        }
      }
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-700">
        Currency Viewer
      </h1>
      <div className="flex flex-col md:flex-row md:items-end mb-4 space-y-4 md:space-y-0 md:space-x-4">
        <CurrencySelector currency={currency} setCurrency={setCurrency} />
        <DateSelector
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
        <FetchButton loading={loading} handleFetch={handleFetch} />
      </div>
      <ErrorMessage error={error} />
      <ExchangeRateTable data={data} currency={currency} />
    </div>
  );
};

export default CurrencyViewer;
