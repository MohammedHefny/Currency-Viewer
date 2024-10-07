import React from "react";

interface CurrencySelectorProps {
  currency: string;
  setCurrency: (currency: string) => void;
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  currency,
  setCurrency,
}) => {
  const currencyOptions = [
    { code: "USD", label: "United States Dollar" },
    { code: "EUR", label: "Euro" },
    { code: "JPY", label: "Japanese Yen" },
    { code: "GBP", label: "British Pound Sterling" },
    { code: "AUD", label: "Australian Dollar" },
    { code: "CAD", label: "Canadian Dollar" },
    { code: "CHF", label: "Swiss Franc" },
    { code: "CNY", label: "Chinese Yuan" },
    { code: "EGP", label: "Egyptian Pound" },
    { code: "SYP", label: "Syrian Pound" },
    { code: "LBP", label: "Lebanese Pound" },
    { code: "SEK", label: "Swedish Krona" },
  ];

  return (
    <select
      value={currency}
      onChange={(e) => setCurrency(e.target.value)}
      className="p-3 border border-gray-300 rounded-md shadow-sm hover:border-blue-500 transition duration-200 ease-in-out"
    >
      <option value="">Select Currency</option>
      {currencyOptions.map((option) => (
        <option key={option.code} value={option.code}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default CurrencySelector;
