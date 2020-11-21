class Navbar {
  static render() {
    const element = document.createElement("section");
    element.id = "Navbar";
    element.innerHTML = `
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
        <div class="nav-content">
          <a class="navbar-brand" href="#">Checklist</a>
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                <span class="user"><i class="fas fa-user-circle"></i>User</span>
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="#">Change password</a>
                <a class="dropdown-item" href="#">Logout</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    `;
    document.querySelector("#root").appendChild(element);
  }
}

export default Navbar;
