import { useState } from "react";

export function useActiveIndex(initialIndex = 0) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const handleButtonClick = (index: number) => {
    setActiveIndex(index);
  };

  return { activeIndex, handleButtonClick };
}
