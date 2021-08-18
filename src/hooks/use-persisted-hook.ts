import React from "react";

export default function usePersistedState<T>(lsKey: string, initialState: T) {
  const [state, setState] = React.useState<T>(() => {
    const foundValue = localStorage.getItem(lsKey);
    if (foundValue) {
      return JSON.parse(foundValue).value;
    }
    return initialState;
  });

  React.useEffect(() => {
    localStorage.setItem(lsKey, JSON.stringify({ value: state }));
  }, [state, lsKey]);

  return [state, setState] as const;
}
