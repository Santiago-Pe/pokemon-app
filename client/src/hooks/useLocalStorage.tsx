import { useCallback, useState } from "react";

function useLocalStorage<T>(key?: string, initialValue?: T) {
  const [storedValue, setStoredValue] = useState<T | null>(() => {
    if (!key) return initialValue ?? null;

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue ?? null;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue ?? null;
    }
  });

  const setValue = useCallback(
    (value: T | ((val: T | null) => T)) => {
      if (!key) return;

      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.error(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key, storedValue]
  );

  const removeAll = () => {
    try {
      setStoredValue(null);
      window.localStorage.clear();
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  };

  return { storedValue, setValue, removeAll };
}

export default useLocalStorage;
