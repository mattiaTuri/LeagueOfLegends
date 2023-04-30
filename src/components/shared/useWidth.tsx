import { useEffect, useState } from "react";

export default function useWidth() {
  const [windowWidth, setWindowWidth] = useState<number>(1024);

  useEffect(() => {
    function WindowResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", WindowResize);
    setWindowWidth(innerWidth);
    return () => {
      removeEventListener("resize", WindowResize);
    };
  }, []);
  return { windowWidth };
}
