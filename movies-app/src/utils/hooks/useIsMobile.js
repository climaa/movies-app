import { useState, useEffect } from "react";

const mobileViewport = parseInt(process.env.REACT_APP_MOBILE_VIEWPORT, 10) || 768;
const debounceViewport  = parseInt(process.env.REACT_APP_DEBOUNCE_VIEWPORT, 10) || 300;

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function useIsMobile() {
  const getIsMobile = () => window.innerWidth <= mobileViewport;
  const [isMobile, setIsMobile] = useState(getIsMobile());

  useEffect(() => {
    const onResize = debounce(() => {
      setIsMobile(getIsMobile());
    }, debounceViewport);

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return isMobile;
}

export default useIsMobile;