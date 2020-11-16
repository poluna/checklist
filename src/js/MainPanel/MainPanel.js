class MainPanel {
  static render() {
    const element = document.createElement("section");
    element.id = "MainPanel";
    element.innerHTML = `
        <div>Main Panel</div>
    `;
    document.querySelector("#root").appendChild(element);
  }
}

export default MainPanel;
