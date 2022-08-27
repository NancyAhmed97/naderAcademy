import "./App.css";
import { useEffect, useState } from "react";
import Routes from "./Routes";
import { useSelector } from "react-redux";
function App() {
  const [toggleDarkness, setToggleDarkness] = useState(false);
  var { darkness } = useSelector((state) => state);
  useEffect(() => {
    setToggleDarkness(darkness.darkness);
  }, [darkness]);

  return (
    <div
      className="App"
      style={
        toggleDarkness ? { background: "#fff" } : { background: "#060303" }
      }
    >
      <Routes />
    </div>
  );
}

export default App;
