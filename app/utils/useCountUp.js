"use client";
import { useEffect, useState } from "react";

export default function useCountUp(end, speed = 20) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const totalDuration = speed; // milisegundos por incremento
    const increment = end / 40; // velocidad del conteo

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, totalDuration);

    return () => clearInterval(counter);
  }, [end, speed]);

  return count;
}
