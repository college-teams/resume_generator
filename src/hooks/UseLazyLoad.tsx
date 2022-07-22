import React from "react";
import { useEffect, useRef, useState } from "react";
import { LazyLoadProps } from "../types/UseLazyLoadType";

const UseLazyLoad = ({
  src,
  alt,
  className,
  styles,
  data_src,
}: LazyLoadProps) => {
  const ref = useRef<HTMLImageElement | null>(null);
  const [showImg, setShowImg] = useState<boolean>(false);
  const [imageLoad, setImageLoad] = useState<boolean>(false);

  const ObserverCallback = (entries: Array<IntersectionObserverEntry>) => {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      return;
    }
    setShowImg(true);
    setImageLoad(false);
  };

  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(
      ObserverCallback,
      {
        root: null,
        threshold: 0,
      }
    );
    observer.observe(ref?.current);
    return () => {
      // eslint-disable-next-line
      // observer?.unobserve(ref?.current);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (imageLoad) {
      ref.current?.classList.remove("image_blur");
    }
  }, [imageLoad]);

  if (showImg) {
    return (
      <img
        onLoad={(e) => {
          setImageLoad(true);
        }}
        src={src}
        alt={alt}
        className={`${className}`}
        style={{ ...styles }}
      />
    );
  }
  return (
    <img
      className={`${className} image_blur`}
      ref={ref}
      src={data_src}
      alt={alt}
      style={{ ...styles }}
    />
  );
};

export default UseLazyLoad;
