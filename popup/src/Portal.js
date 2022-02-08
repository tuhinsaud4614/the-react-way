import { createPortal } from "react-dom";

const Portal = ({ children }) => {
  return createPortal(children, document.getElementById("presentational"));
};

export default Portal;
