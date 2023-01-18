console.log("national library of india.");

//constructor
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

//display constructor.
function Display() {}

//Add methods to display prototype

Display.prototype.add = function (book) {
  console.log("Adding to UI");
  tableBody = document.getElementById("tableBody");
  let uistring = ` <tr>

        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>

</tr>`;
  tableBody.innerHTML += uistring;
};

//IMPLEMENT THE CLEAR FUNCTION.
Display.prototype.clear = function () {
  let libraryform = document.getElementById("libraryform");
  libraryform.reset();
};

//IMPLEMENT THE  VALIDATE FUNCTION.
Display.prototype.validate = function (book) {
  if (book.name.length < 2 || book.author.length < 2) {
    return false;
  } else {
    return true;
  }
};

let message = document.getElementById("message");

Display.prototype.show = function (type, displaymessage) {
  let message = document.getElementById("message");
  message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
  <strong>Message:</strong> ${displaymessage}
  <button type="button" class="btn-close" data-dismiss="alert" aria-label="Close">
  </button>
</div>`;
  //   message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
  //   <strong>Message:</strong> ${displaymessage}
  //   <button type="button" class="close" data-dismiss="alert" aria-label="Close">
  //   <span aria-hidden="true">&times;</span>
  //   </button>
  // </div>`;
  setTimeout(function () {
    message.innerHTML = "";
  }, 3000);
};

//Add submit event listener to libraryform.
let libraryform = document.getElementById("libraryform");
libraryform.addEventListener("submit", libraryformsubmit);

function libraryformsubmit(e) {
  console.log("you have submitted the form.");
  let name = document.getElementById("bookname").value;
  let author = document.getElementById("author").value;
  let type;

  //programing , eduational, motivational.
  let programming = document.getElementById("programming");
  let motivational = document.getElementById("motivational");
  let educational = document.getElementById("educational");

  if (programming.checked) {
    type = programming.value;
  } else if (educational.checked) {
    type = educational.value;
  } else if (motivational.checked) {
    type = motivational.value;
  }
  e.preventDefault();
  let book = new Book(name, author, type);
  console.log(book);

  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success", "you have added this book successfully");
  } else {
    display.show(
      "danger",
      "sorry you cannot add this book because you havenot filled up all the blank  "
    );
  }
}
