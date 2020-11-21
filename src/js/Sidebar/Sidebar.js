class Sidebar {
  static render() {
    const sidebar = document.createElement("section");
    sidebar.id = "Sidebar";
    sidebar.innerHTML = `
    <div class="accordion" id="accordionExample">
        <div class="card">
            <div class="card-header" id="headingOne">
            <h2 class="mb-0">
                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Example #1
                </button>
            </h2>
            </div>
            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
                Lorem ipsum...
            </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header" id="headingTwo">
            <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Example #2
                </button>
            </h2>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body">
                Lorem ipsum...
            </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header" id="headingThree">
            <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Example #3
                </button>
            </h2>
            </div>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div class="card-body">
                Lorem ipsum...
            </div>
            </div>
        </div>
    </div>

    <form>
      <div class="input-group mb-3">
        <input
          id="nameInput"
          type="text"
          class="form-control"
          placeholder="Add new project"
          aria-label="Add new project"
          aria-describedby="basic-addon2"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-light"
            type="button"
            id="addBtn"
          >
            Add
          </button>
        </div>
      </div>
    </form>
    `;
    document.querySelector("#root").appendChild(sidebar);
    const nameInput = document.querySelector("#nameInput");
    document
      .querySelector("#addBtn")
      .addEventListener("click", () => console.log(nameInput.value));
  }
}

export default Sidebar;
