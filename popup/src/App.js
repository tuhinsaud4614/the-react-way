import "./App.css";
import PopUp from "./PopUp";
import { useState } from "react";

function App() {
  const [anchorEle, setAnchorEle] = useState(null);

  return (
    <div>
      <div className="Root">
        <button
          className="Btn"
          onClick={(e) => {
            setAnchorEle(e.currentTarget);
          }}
        >
          Button
        </button>
        <PopUp
          show={Boolean(anchorEle)}
          anchorEle={anchorEle}
          onClose={() => {
            setAnchorEle(null);
          }}
          anchorOrigin={{ horizontal: "right", vertical: "top" }}
          // hiddenArrow
        >
          <section className="Box">
            This is Pop up Menu
          </section>
        </PopUp>
      </div>
    </div>
  );
}

export default App;
