import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface AccessibilityContextProps {
  isOnImage1: boolean;
  setIsOnImage1: React.Dispatch<React.SetStateAction<boolean>>;
  isOnImage2: boolean;
  setIsOnImage2: React.Dispatch<React.SetStateAction<boolean>>;
  hoveredIndex: number | null;
  handleClick: (index: number) => void;
  clickedIndexes: number[];
  isCursorActive: boolean;
  isContrastActive: boolean;
  isMaskActive: boolean;
  pause: boolean;
  setIsOnImage4: React.Dispatch<React.SetStateAction<boolean>>;
  isOnImage4: boolean;
  isOnImage5: boolean;
  setIsOnImage5: React.Dispatch<React.SetStateAction<boolean>>;
  maskPosition: { x: number; y: number };
  isOnImage6: boolean;
  setIsOnImage6: React.Dispatch<React.SetStateAction<boolean>>;
  isStaturate: boolean;
  isOnImage7: boolean;
  setIsOnImage7: React.Dispatch<React.SetStateAction<boolean>>;
}

const AccessibilityContext = createContext<
  AccessibilityContextProps | undefined
>(undefined);

interface AccessibilityProviderProps {
  children: ReactNode;
}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({
  children,
}) => {
  const [isCursorActive, setIsCursorActive] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedIndexes, setClickedIndexes] = useState<number[]>([]);
  const [isContrastActive, setIsContrastActive] = useState<boolean>(false);
  const [isMaskActive, setIsMaskActive] = useState<boolean>(false);
  const [maskPosition, setMaskPosition] = useState({ x: 0, y: 0 });
  const [pause, setPause] = useState<boolean>(false);
  const [isStaturate, setIsStaturate] = useState<boolean>(false);

  const [isOnImage1, setIsOnImage1] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const storedIsOnImage1 = localStorage.getItem("isOnImage1");
      return storedIsOnImage1 !== null ? JSON.parse(storedIsOnImage1) : false;
    }
    return false;
  });

  const [isOnImage2, setIsOnImage2] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const storedIsOnImage2 = localStorage.getItem("isOnImage2");
      return storedIsOnImage2 !== null ? JSON.parse(storedIsOnImage2) : false;
    }
    return false;
  });

  const [isOnImage4, setIsOnImage4] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const storedIsOnImage4 = localStorage.getItem("isOnImage4");
      return storedIsOnImage4 !== null ? JSON.parse(storedIsOnImage4) : false;
    }
    return false;
  });

  const [isOnImage5, setIsOnImage5] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const storedIsOnImage5 = localStorage.getItem("isOnImage5");
      return storedIsOnImage5 !== null ? JSON.parse(storedIsOnImage5) : false;
    }
    return false;
  });

  const [isOnImage6, setIsOnImage6] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const storedIsOnImage6 = localStorage.getItem("isOnImage6");
      return storedIsOnImage6 !== null ? JSON.parse(storedIsOnImage6) : false;
    }
    return false;
  });

  const [isOnImage7, setIsOnImage7] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const storedIsOnImage7 = localStorage.getItem("isOnImage7");
      return storedIsOnImage7 !== null ? JSON.parse(storedIsOnImage7) : false;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("isOnImage1", JSON.stringify(isOnImage1));
      localStorage.setItem("isOnImage2", JSON.stringify(isOnImage2));
      localStorage.setItem("isOnImage4", JSON.stringify(isOnImage4));
      localStorage.setItem("isOnImage5", JSON.stringify(isOnImage5));
      localStorage.setItem("isOnImage6", JSON.stringify(isOnImage6));
      localStorage.setItem("isOnImage7", JSON.stringify(isOnImage7));
    }
  }, [isOnImage1, isOnImage2, isOnImage4, isOnImage5, isOnImage6, isOnImage7]);

  useEffect(() => {
    if (isOnImage1) {
      document.body.classList.add("bigger-font");
    } else {
      document.body.classList.remove("bigger-font");
    }

    return () => {
      document.body.classList.remove("bigger-font");
    };
  }, [isOnImage1]);

  useEffect(() => {
    if (isOnImage2) {
      document.body.style.cursor =
        'url("/images/accessibility/cursor-pointer-32.svg"), auto';
    } else {
      document.body.style.cursor = "auto";
    }

    return () => {
      document.body.style.cursor = "auto";
    };
  }, [isOnImage2]);

  useEffect(() => {
    if (isOnImage4) {
      document.body.classList.add("contrast");
    } else {
      document.body.classList.remove("contrast");
    }

    return () => {
      document.body.classList.remove("contrast");
    };
  }, [isOnImage4]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newX = window.innerWidth / 2;
      const newY = Math.max(0, Math.min(e.clientY, window.innerHeight - 200));
      setMaskPosition({ x: newX, y: newY });
    };

    if (isOnImage5) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isOnImage5]);

  useEffect(() => {
    if (isOnImage6) {
      document.body.classList.add("pauseAnimation");
    } else {
      document.body.classList.remove("pauseAnimation");
    }

    return () => {
      document.body.classList.remove("pauseAnimation");
    };
  }, [isOnImage6]);

  useEffect(() => {
    if (isOnImage7) {
      document.body.classList.add("saturated");
    } else {
      document.body.classList.remove("saturated");
    }

    return () => {
      document.body.classList.remove("saturated");
    };
  }, [isOnImage7]);

  useEffect(() => {
    const storedClickedIndexes = localStorage.getItem("clickedIndexes");
    if (storedClickedIndexes) {
      setClickedIndexes(JSON.parse(storedClickedIndexes));
    }
    if (storedClickedIndexes?.includes("0")) {
      setIsOnImage2(true);
    } else {
      setIsOnImage2(false);
    }
    if (storedClickedIndexes?.includes("2")) {
      setIsOnImage4(true);
    } else {
      setIsOnImage4(false);
    }
    if (storedClickedIndexes?.includes("3")) {
      setIsOnImage5(true);
    } else {
      setIsOnImage5(false);
    }
    if (storedClickedIndexes?.includes("4")) {
      setIsOnImage6(true);
    } else {
      setIsOnImage6(false);
    }
    if (storedClickedIndexes?.includes("5")) {
      setIsOnImage7(true);
    } else {
      setIsOnImage7(false);
    }
  }, []);

  const handleClick = (index: number) => {
    setClickedIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index];

      localStorage.setItem("clickedIndexes", JSON.stringify(updatedIndexes));
      const updatedIsOnImage2 = updatedIndexes.includes(0);
      setIsOnImage2(updatedIsOnImage2);
      const updatedIsOnImage4 = updatedIndexes.includes(2);
      setIsOnImage4(updatedIsOnImage4);
      const updatedIsOnImage5 = updatedIndexes.includes(3);
      setIsOnImage5(updatedIsOnImage5);
      const updatedIsOnImage6 = updatedIndexes.includes(4);
      setIsOnImage6(updatedIsOnImage6);
      const updatedIsOnImage7 = updatedIndexes.includes(5);
      setIsOnImage7(updatedIsOnImage7);

      return updatedIndexes;
    });
  };

  useEffect(() => {
    if (isOnImage2 && clickedIndexes.includes(0)) {
      setIsCursorActive(true);
    } else {
      setIsCursorActive(false);
    }
    if (isOnImage4 && clickedIndexes.includes(2)) {
      setIsContrastActive(true);
    } else {
      setIsContrastActive(false);
    }
    if (isOnImage5 && clickedIndexes.includes(3)) {
      setIsMaskActive(true);
    } else {
      setIsMaskActive(false);
    }
    if (isOnImage6 && clickedIndexes.includes(4)) {
      setPause(true);
    } else {
      setPause(false);
    }
    if (isOnImage7 && clickedIndexes.includes(5)) {
      setIsStaturate(true);
    } else {
      setIsStaturate(false);
    }
  }, [
    isOnImage2,
    isOnImage4,
    isOnImage5,
    isOnImage6,
    isOnImage7,
    clickedIndexes,
  ]);

  useEffect(() => {
    if (isOnImage2 && isCursorActive) {
      document.body.style.cursor =
        'url("/images/accessibility/cursor-pointer-32.svg"), auto';
    } else {
      document.body.style.cursor = "auto";
    }

    return () => {
      document.body.style.cursor = "auto";
    };
  }, [isOnImage2, isCursorActive]);

  useEffect(() => {
    if (isOnImage4 && isContrastActive) {
      document.body.classList.add("contrast");
    } else {
      document.body.classList.remove("contrast");
    }

    return () => {
      document.body.classList.remove("contrast");
    };
  }, [isOnImage4, isContrastActive]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newX = window.innerWidth / 2;
      const newY = Math.max(0, Math.min(e.clientY, window.innerHeight - 200));
      setMaskPosition({ x: newX, y: newY });
    };

    if (isOnImage5 && isMaskActive) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isOnImage5, isMaskActive]);

  useEffect(() => {
    if (isOnImage6 && pause) {
      document.body.classList.add("pauseAnimation");
    } else {
      document.body.classList.remove("pauseAnimation");
    }

    return () => {
      document.body.classList.remove("pauseAnimation");
    };
  }, [isOnImage6, pause]);

  useEffect(() => {
    if (isOnImage7 && isStaturate) {
      document.body.classList.add("saturated");
    } else {
      document.body.classList.remove("saturated");
    }

    return () => {
      document.body.classList.remove("saturated");
    };
  }, [isOnImage7, isStaturate]);

  return (
    <AccessibilityContext.Provider
      value={{
        isOnImage1,
        setIsOnImage1,
        isOnImage2,
        setIsOnImage2,
        hoveredIndex,
        handleClick,
        clickedIndexes,
        isCursorActive,
        isContrastActive,
        isOnImage4,
        setIsOnImage4,
        isOnImage5,
        setIsOnImage5,
        isMaskActive,
        maskPosition,
        pause,
        isOnImage6,
        setIsOnImage6,
        isStaturate,
        isOnImage7,
        setIsOnImage7,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = (): AccessibilityContextProps => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error(
      "useAccessibility must be used within an AccessibilityProvider"
    );
  }
  return context;
};
