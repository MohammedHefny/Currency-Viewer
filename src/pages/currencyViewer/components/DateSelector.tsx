import React from "react";

interface DateSelectorProps {
  startDate: string;
  setStartDate: (date: string) => void;
  endDate: string;
  setEndDate: (date: string) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="p-3 border border-gray-300 rounded-md shadow-sm hover:border-blue-500 transition duration-200 ease-in-out"
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="p-3 border border-gray-300 rounded-md shadow-sm hover:border-blue-500 transition duration-200 ease-in-out"
      />
    </div>
  );
};

export default DateSelector;
