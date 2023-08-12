import { useState } from 'react';

const useInput = (initialValue, validationFunction) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);

    if (validationFunction) {
      const errorMessage = validationFunction(newValue);
      setError(errorMessage);
    }
  };

  return {
    value,
    error,
    handleChange,
  };
};

export default useInput;
