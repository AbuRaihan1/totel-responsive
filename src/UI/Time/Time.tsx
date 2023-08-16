// import React, { useState } from 'react';

// function OptionButton({ label, selected, onClick }) {
//   return (
//     <button
//       className={`option-button ${selected ? 'selected' : ''}`}
//       onClick={onClick}
//     >
//       {label}
//     </button>
//   );
// }

// function OptionSelector({ options, onChange }) {
//   const [selectedOption, setSelectedOption] = useState(options[0]);

//   function handleOptionClick(option) {
//     setSelectedOption(option);
//     onChange(option);
//   }

//   return (
//     <div className="option-selector">
//       {options.map((option) => (
//         <OptionButton
//           key={option}
//           label={option}
//           selected={option === selectedOption}
//           onClick={() => handleOptionClick(option)}
//         />
//       ))}
//     </div>
//   );
// }

// export default OptionSelector;
import React, { useState } from 'react';

interface OptionButtonProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

function OptionButton({ label, selected, onClick }: OptionButtonProps) {
  return (
    <button
      className={`option-button ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

interface OptionSelectorProps {
  options: string[];
  onChange: (option: string) => void;
}

function OptionSelector({ options, onChange }: OptionSelectorProps) {
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);

  function handleOptionClick(option: string) {
    setSelectedOption(option);
    onChange(option);
  }

  return (
    <div className="option-selector">
      {options.map((option) => (
        <OptionButton
          key={option}
          label={option}
          selected={option === selectedOption}
          onClick={() => handleOptionClick(option)}
        />
      ))}
    </div>
  );
}

export default OptionSelector;
