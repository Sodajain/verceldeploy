import { useState } from "react";

interface SwitchProps {
  label: string;
  initial?: boolean;
  onToggle: (enabled: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ label, initial = false, onToggle }) => {
  const [enabled, setEnabled] = useState(initial);

  const handleToggle = (newState: boolean) => {
    setEnabled(newState);
    onToggle(newState);
  };

  return (
    <div className="flex flex-col items-center">
      <span className="mb-4 text-gray-700">{label}</span>
      <div className="flex border-2 border-gray-300 rounded-md overflow-hidden">
        <button
          onClick={() => handleToggle(false)}
          className={`py-2 px-4 w-40 text-center transition-colors focus:outline-none ${
            !enabled ? 'bg-[#FF2C61] text-white' : 'bg-gray-100 text-gray-700'
          }`}
        >
          Find a Flat
        </button>
        <button
          onClick={() => handleToggle(true)}
          className={`py-2 px-4 w-40 text-center transition-colors focus:outline-none ${
            enabled ? 'bg-[#FF2C61] text-white' : 'bg-gray-100 text-gray-700'
          }`}
        >
          Find a Flatmate
        </button>
      </div>
    </div>
  );
};

export default Switch;
