function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

function Display() {}
Display.prototype.add = function (book) {
  let tableBody = document.getElementById("tableBody");
  uiString = `<tr>
  <td>${book.name}</td>
  <td>${book.author}</td>
  <td>${book.type}</td>
</tr>`;
  tableBody.innerHTML += uiString;
};
Display.prototype.clear = function () {
  let libaryForm = document.getElementById("libraryForm");
  libaryForm.reset();
};
Display.prototype.show = function (event, message) {
  
let confirm= document.getElementById("confirm");
confirm.innerHTML= `<div class="alert alert-${event} alert-dismissible fade show" role="alert">
<strong>Message: </strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
` ;
setTimeout(() => {
  confirm.innerHTML=""
}, 3000);
};

Display.prototype.validate = function (book) {
  if (book.name.length < 2 || book.author.length < 2) {
    return false;
  } else {
    return true;
  }
};

let libaryForm = document.getElementById("libraryForm");
libaryForm.addEventListener("submit", libaryFormSubmit);

function libaryFormSubmit(e) {
  e.preventDefault();
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let type;
  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");
  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else {
    type = cooking.value;
  }
  let book = new Book(name, author, type);
  console.log(book);

  let display = new Display();
  let validate = display.validate(book);
  if (validate) {
    display.add(book);
    display.clear();
    display.show("success", "your book has been added successfully");
  } else {
    display.show("danger", "you cannot add this book");
  }

  // console.log("form submitted");
}
