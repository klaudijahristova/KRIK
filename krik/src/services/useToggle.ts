import { useState, useCallback } from "react";

// ......Toggle Custom Hook...........................

type UseToggleReturnType = [boolean, () => void];

const useToggle = (initialState: boolean = false): UseToggleReturnType => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = useCallback(() => {
    setState((prevState) => !prevState);
  }, []);

  return [state, toggle];
};

export default useToggle;
