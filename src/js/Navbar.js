class Navbar {
  static render() {
    const element = document.createElement("section");
    element.id = "Navbar";
    element.innerHTML = `
      <div class="fixed-top">
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="bg-dark text-right p-2">
            <a href="#"><h5 class="text-white h5">Change password</h5></a> 
            <a href="#"><h5 class="text-white h5">Logout</h5></a> 
          </div>
        </div>
        <nav class="navbar navbar-dark bg-dark">
          <a class="navbar-brand" href="#">Checklist</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span><i class="fas fa-user-circle"></i>User</span>
            <i class="navbar-toggler-icon"></i>
          </button>
        </nav>
      </div>
    `;
    document.querySelector("#root").appendChild(element);
  }
}

export default Navbar;
