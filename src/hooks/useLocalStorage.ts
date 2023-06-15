import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  // Utilize useState to manage the value stored in Local Storage
  const [value, setValue] = useState(() => {
    // Check if the value already exists in Local Storage
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  // Update Local Storage whenever the value changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export { useLocalStorage };
