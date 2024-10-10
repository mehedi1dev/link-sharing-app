import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface Option {
  value: string;
  label: string;
  icon: JSX.Element;
  color: string;
}

interface CustomSelectProps {
  options: Option[];
  onOptionClick: (option: Option) => void;
  selectedValue?: string; // Add this prop to receive the selected value
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  onOptionClick,
  selectedValue,
}) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Effect to set the selected option based on the selectedValue prop
  useEffect(() => {
    const selected = options.find((option) => option.label === selectedValue);
    setSelectedOption(selected || null);
  }, [selectedValue, options]);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    onOptionClick(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full mt-1">
      {/* Dropdown button */}
      <div
        className="flex items-center gap-2 w-full p-2 rounded border border-gray-400 cursor-pointer hover:border-indigo-500 bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-full flex justify-between items-center">
          <p className="flex items-center gap-2">
            {selectedOption ? (
              <>
                <span>{selectedOption.icon}</span>
                <span>{selectedOption.label}</span>
              </>
            ) : (
              "Select an option"
            )}
          </p>
          <p className="text-gray-700">
            <IoIosArrowDown />
          </p>
        </div>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute mt-1 w-full rounded border border-gray-400 bg-white shadow-lg z-10">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="flex items-center gap-2 p-2 cursor-pointer hover:bg-indigo-100"
            >
              <span>{option.icon}</span>
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
