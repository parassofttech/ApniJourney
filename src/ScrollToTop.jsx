import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const container = document.getElementById("main-content");

    if (container) {
      container.scrollTo({
        top: 0,
        behavior: "instant", // ya "smooth"
      });
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;