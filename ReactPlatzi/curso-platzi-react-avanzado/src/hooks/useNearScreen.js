import { useEffect, useState, useRef } from "react";

function useNearScreen() {
  const element = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(
    function () {
      const loadPollyfill = async () => {
        try {
          await import("intersection-observer");
        } catch (e) {
          console.error(e);
        }
      };

      if (!window.IntersectionObserver) loadPollyfill();

      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0];
        console.log(isIntersecting);
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(element.current);
    },
    [element]
  );
  return [show, element];
}

export { useNearScreen };
