import { useState, useEffect, useCallback } from "react";

const useWindowSize = () => {
  const getSize = useCallback(() => window.innerWidth, [])
  const [windowSize, setWindowSize] = useState<Number>(getSize);

  useEffect(() => {
    const handleResize = () => setWindowSize(getSize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize, getSize]);

  return windowSize;
};

export default useWindowSize;
