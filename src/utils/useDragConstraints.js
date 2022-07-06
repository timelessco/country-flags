import { useState, useEffect } from "react";

/**
 * Calculate the top/bottom scroll constraints of a full-screen element vs the viewport
 */
export function useDragConstraints(ref, measureConstraints) {
  const [constraints, setConstraints] = useState({
    top: 0,
    bottom: 0,
  });

  useEffect(() => {
    if (!measureConstraints) return;

    const element = ref?.current;
    const viewportHeight = window?.innerHeight;
    const contentTop = element?.offsetTop;
    const contentHeight = element?.offsetHeight;
    const scrollableViewport = viewportHeight - contentTop * 2;
    const top = Math.min(scrollableViewport - contentHeight, 0);

    setConstraints({ top, bottom: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [measureConstraints]);

  return constraints;
}
