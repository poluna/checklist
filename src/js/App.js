import MainPanel from "./MainPanel/MainPanel";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar/Sidebar";

class App {
  static render() {
    Navbar.render();
    Sidebar.render();
    MainPanel.render();
  }
}

export default App;
