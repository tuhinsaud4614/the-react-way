import "./App.css";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import Carousel from "./carousel";

function App() {
  return (
    <div className="App">
      <Carousel>
        <img src={img1} alt="nature-1" style={{width: "100%", height: "100%"}}/>
        <img src={img2} alt="nature-2" style={{width: "100%", height: "100%"}}/>
        <img src={img3} alt="nature-3" style={{width: "100%", height: "100%"}}/>
      </Carousel>
    </div>
  );
}

export default App;
