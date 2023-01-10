import "./App.css";
import Gameboard from "./components/gameboard";
import firstQuarter from "./images/firstQuarter.png";
import fullMoon from "./images/fullMoon.png";
import newMoon from "./images/newMoon.png";
import thirdQuarter from "./images/thirdQuarter.png";
import waningCrescent from "./images/waningCrescent.png";
import waningGibbous from "./images/waningGibbous.png";
import waxingCrescent from "./images/waxingCrescent.png";
import waxingGibbous from "./images/waxingGibbous.png";

function App() {
  return (
    <div>
      <Gameboard
        imgs={[
          firstQuarter,
          fullMoon,
          newMoon,
          thirdQuarter,
          waningCrescent,
          waningGibbous,
          waxingCrescent,
          waxingGibbous,
        ]}
      />
    </div>
  );
}

export default App;
