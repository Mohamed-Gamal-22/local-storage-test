let myInput = document.getElementById("key");
let checkBtn = document.getElementById("check");
let addBtn = document.getElementById("add");
let deleteBtn = document.getElementById("delete");
let showBtn = document.getElementById("show");
let results = document.querySelector(".results > span");
//////////////////////////////////////////////////////////////
let allButton = document.querySelectorAll(".container .btn");
//////////////////////////////////////////////////////////////

allButton.forEach((span) => {
  span.addEventListener("click", function (e) {
    if (e.target.classList.contains("check")) {
      checkItem();
    }
    if (e.target.classList.contains("add")) {
      addItem();
    }
    if (e.target.classList.contains("delete")) {
      deleteItem();
    }
    if (e.target.classList.contains("show")) {
      showItem();
    }
  });
});

function checkItem() {
  if (myInput.value !== "") {
    if (localStorage.getItem(myInput.value) == null) {
      results.innerHTML = `There Is No Item Called <span class="fw-bold text-danger">${myInput.value} !</span>`;
    } else {
      results.innerHTML = `We Found This Item Called <span class="fw-bold text-info">${myInput.value}`;
    }
  } else {
    messageIfEmpty();
  }
}
function addItem() {
  if (myInput.value !== "") {
    if (localStorage.getItem(myInput.value) == null) {
      localStorage.setItem(myInput.value, "");
      results.innerHTML = `Your Item <span class="fw-bold">${myInput.value}</span> <span class="fw-bold text-success">Successfully </span> Added`;
      myInput.value = "";
    } else {
      results.innerHTML = `This Item Is <span class="fw-bold text-danger">Exists</span> Before Try Another Item Please !`;
    }
  } else {
    messageIfEmpty();
  }
}

function deleteItem() {
  if (myInput.value !== "") {
    if (localStorage.getItem(myInput.value) == null) {
      results.innerHTML = `This Item Doesn't <span class="fw-bold text-danger">Exist !!</span>`;
    } else {
      localStorage.removeItem(myInput.value);
      results.innerHTML = `you <span class="fw-bold text-warning">Deleted</span> The Item Successfully`;
      myInput.value = "";
    }
  } else {
    messageIfEmpty();
  }
}
function showItem() {
  if (localStorage.length) {
    results.innerHTML = `There Are ${localStorage.length} Items In Localstorage`;
  } else {
    results.innerHTML = `There Is Not Items !`;
  }
}

function messageIfEmpty() {
  results.innerHTML = "Input can't be empty";
}
