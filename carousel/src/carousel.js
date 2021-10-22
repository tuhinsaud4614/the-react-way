import {
  useMemo,
  Children,
  useLayoutEffect,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import styles from "./carousel.module.css";

const Carousel = ({ children }) => {
  const containerRef = useRef();
  const intervalRef = useRef(null);
  const [current, setCurrent] = useState(1);
  const [translateX, setTranslateX] = useState(0);

  const actionHandler = useCallback(
    (mode) => {
      containerRef.current.style.transitionDuration = "400ms";
      if (mode === "prev") {
        if (current <= 1) {
          setTranslateX(0);
          setCurrent(children.length);
        } else {
          setTranslateX(containerRef.current.clientWidth * (current - 1));
          setCurrent((prev) => --prev);
        }
      } else if (mode === "next") {
        if (current >= children.length) {
          setTranslateX(
            containerRef.current.clientWidth * (children.length + 1)
          );
          setCurrent(1);
        } else {
          setTranslateX(containerRef.current.clientWidth * (current + 1));
          setCurrent((prev) => ++prev);
        }
      }
    },
    [current, children]
  );

  // This is for infinite scroll smooth effect
  useEffect(() => {
    const transitionEnd = () => {
      if (current <= 1) {
        containerRef.current.style.transitionDuration = "0ms";
        setTranslateX(containerRef.current.clientWidth * current);
      }

      if (current >= children.length) {
        containerRef.current.style.transitionDuration = "0ms";
        setTranslateX(containerRef.current.clientWidth * children.length);
      }
    };

    document.addEventListener("transitionend", transitionEnd);

    return () => {
      document.removeEventListener("transitionend", transitionEnd);
    };
  }, [current, children]);

  //   for autoplay
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      actionHandler("next");
    }, 3000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [actionHandler]);

  const slides = useMemo(() => {
    if (children.length > 1) {
      let items = Children.map(children, (child, index) => (
        <li key={index} className={styles.Slide}>
          {child}
        </li>
      ));

      return [
        <li key={children.length + 1} className={styles.Slide}>
          {children[children.length - 1]}
        </li>,
        ...items,
        <li key={children.length + 2} className={styles.Slide}>
          {children[0]}
        </li>,
      ];
    }

    return <li className={styles.Slide}>{children[0]}</li>;
  }, [children]);

  //   position first element correctly & this will render only ones
  useLayoutEffect(() => {
    setTranslateX(containerRef.current.clientWidth * current);
  }, []);

  return (
    <section className={styles.Root}>
      <ul
        ref={containerRef}
        className={styles.Container}
        style={{
          transform: `translate3d(${-translateX}px, 0, 0)`,
        }}
      >
        {slides}
      </ul>
      <button
        onClick={() => actionHandler("prev")}
        className={`${styles.Btn} ${styles.BtnLeft}`}
      >
        {"<"}
      </button>
      <button
        onClick={() => actionHandler("next")}
        className={`${styles.Btn} ${styles.BtnRight}`}
      >
        {">"}
      </button>
    </section>
  );
};

export default Carousel;
