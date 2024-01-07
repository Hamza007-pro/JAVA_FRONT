import { useState } from 'react';

const NumberPicker = () => {
  const [number, setNumber] = useState(0);

  const decreaseNumber = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  const increaseNumber = () => {
    setNumber(number + 1);
  };

  return (
    <div className="flex items-center justify-center">
      <button onClick={decreaseNumber} className="px-4 py-2 bg-gray-200 text-gray-700">
        -
      </button>
      <input
        type="text"
        value={number}
        readOnly
        onChange={(e) => setNumber(parseInt(e.target.value))}
        className="px-4 py-2 text-center w-16"
      />
      <button onClick={increaseNumber} className="px-4 py-2 bg-gray-200 text-gray-700">
        +
      </button>
    </div>
  );
};

export default NumberPicker;
