import React from "react";
import { useEffect, useRef, useState } from "react";

const UseReveal = () => {
  const [show, setShow] = useState(false);
  const componentRef = useRef(null);

  const observerCallback = (entries, observer) => {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      return;
    }
    setShow(true);
  };
  useEffect(() => {
    let observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0,
    });
    observer.observe(componentRef?.current);
    return () => {
      observer.disconnect(componentRef?.current);
    };
  }, [show]);

  return [show, componentRef];
};

export default UseReveal;
