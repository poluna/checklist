import MainPanel from "./MainPanel/MainPanel";
import Navbar from "./Navbar";

class App {
  static render() {
    Navbar.render();
    MainPanel.render();
  }
}

export default App;
