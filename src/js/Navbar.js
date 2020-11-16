class Navbar {
    static render() {
      const element = document.createElement("section");
      element.id = "Navbar";
      element.innerHTML = `
          <div>Navbar</div>
      `;
      document.querySelector("#root").appendChild(element);
    }
  }
  
  export default Navbar;