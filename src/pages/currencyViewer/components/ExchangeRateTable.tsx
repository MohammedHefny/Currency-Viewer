import React from "react";
import { format, parseISO } from "date-fns";

interface ExchangeRate {
  date: string;
  rate: number;
}

interface ExchangeRateTableProps {
  data: ExchangeRate[];
  currency: string;
}

const ExchangeRateTable: React.FC<ExchangeRateTableProps> = ({
  data,
  currency,
}) => {
  return data.length > 0 ? (
    <div className="overflow-x-auto vh-50">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-3 px-4 border-b">Date</th>
            <th className="py-3 px-4 border-b">
              Exchange Rate ({currency}/USD)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.date} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b text-center">
                {format(parseISO(item.date), "MMMM d, yyyy")}
              </td>
              <td className="py-2 px-4 border-b text-center">
                {item.rate.toFixed(4)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <p>No exchange rate data available.</p>
  );
};

export default ExchangeRateTable;
