import React from "react";

interface FetchButtonProps {
  loading: boolean;
  handleFetch: () => void;
}

const FetchButton: React.FC<FetchButtonProps> = ({ loading, handleFetch }) => {
  return (
    <button
      onClick={handleFetch}
      className="p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 ease-in-out shadow-md"
    >
      {loading ? <span className="animate-spin">Loading ...</span> : "Fetch"}
    </button>
  );
};

export default FetchButton;
