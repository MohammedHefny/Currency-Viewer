import React from "react";

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return error ? (
    <div className="mb-4 p-3 bg-red-200 text-red-800 rounded-md">{error}</div>
  ) : null;
};

export default ErrorMessage;
