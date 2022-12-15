//Add Items
function addItem() {
  var li = document.createElement("li");
  var addToDo = document.getElementById("AddToDo").value;
  document.getElementById("AddToDo").value = "";
  var inputData = document.createTextNode(addToDo);
  li.appendChild(inputData);
  if (addToDo === "") {
    alert("You must write something!");
  } else {
    document.getElementById("toDoList").appendChild(li);
  }

  var span = document.createElement("button");
  var txt = document.createTextNode("\u00D7");
  span.className = "closeBtn";
  span.appendChild(txt);
  li.appendChild(span);

  var close = document.getElementsByClassName("closeBtn");
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

//Checked items
var list = document.querySelector("ul");
list.addEventListener("click", function (ev) {
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle("checked");
  }
});

//Delete Items
var close = document.getElementsByClassName("closeBtn");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
