import Portal from "./Portal";
import styles from "./PopUp.module.css";
import { useLayoutEffect, useRef, useState } from "react";

const ARROW_SIZE = 14;

const getPositions = (anchorRect, selfRect, anchorOrigin, hiddenArrow) => {
  let selfLeft = 0;
  let selfTop = 0;
  let arrowLeft = 0;
  let arrowTop = 0;

  if (anchorRect && selfRect) {
    selfLeft = anchorRect.left;
    selfTop = hiddenArrow ? anchorRect.bottom : anchorRect.bottom + ARROW_SIZE;

    arrowLeft = anchorRect.left + (anchorRect.width / 2 - ARROW_SIZE / 2);
    arrowTop = anchorRect.bottom + ARROW_SIZE / 2;

    if (anchorOrigin.horizontal === "center") {
      selfLeft = anchorRect.left - (selfRect.width - anchorRect.width) / 2;
    } else if (anchorOrigin.horizontal === "right") {
      selfLeft = anchorRect.right - selfRect.width;
    }

    if (anchorOrigin.vertical === "top") {
      selfTop =
        anchorRect.top - selfRect.height - (hiddenArrow ? 0 : ARROW_SIZE);
      arrowTop = anchorRect.top - ARROW_SIZE * 1.5;
    }
  }

  return {
    selfLeft,
    selfTop,
    arrowLeft,
    arrowTop,
  };
};

const PopUp = ({
  children,
  onClose,
  show,
  anchorEle,
  anchorOrigin = {
    horizontal: "left", // "left" || "center" || "right"
    vertical: "bottom", // "bottom" || "top"
  },
  hiddenArrow = false,
}) => {
  const [anchorRect, setAnchorRect] = useState(null);
  const [selfRect, setSelfRect] = useState(null);
  const ref = useRef(null);

  // if you use useEffect you will face this problem
  useLayoutEffect(() => {
    const controller = () => {
      if (ref.current) {
        setSelfRect(ref.current.getBoundingClientRect());
      }

      if (anchorEle) {
        setAnchorRect(anchorEle.getBoundingClientRect());
      }
    };
    controller();

    window.addEventListener("resize", controller);
    window.addEventListener("scroll", controller);

    return () => {
      window.removeEventListener("resize", controller);
      window.removeEventListener("scroll", controller);
    };
  }, [anchorEle]);

  if (!show) {
    return null;
  }

  const { arrowLeft, arrowTop, selfLeft, selfTop } = getPositions(
    anchorRect,
    selfRect,
    anchorOrigin,
    hiddenArrow
  );
  return (
    <Portal>
      {onClose && <div className={styles.Backdrop} onClick={onClose}></div>}
      <div
        className={styles.Container}
        ref={ref}
        style={{
          left: selfLeft,
          top: selfTop,
        }}
      >
        {!hiddenArrow && (
          <span
            className={styles.Arrow}
            style={{
              left: arrowLeft,
              top: arrowTop,
              height: ARROW_SIZE,
              width: ARROW_SIZE,
            }}
          ></span>
        )}
        <div className={styles.Content}>{children}</div>
      </div>
    </Portal>
  );
};

export default PopUp;
