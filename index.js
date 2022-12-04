//my js code

document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.querySelector("#submit");
    submitButton.addEventListener("click", formSubmit, false);
  });

  function formSubmit(event) {
    var toDoItem = document.getElementById("new-task-description").value;
    if(toDoItem === undefined || toDoItem == null || toDoItem.length <= 0){
      alert("To do item not provided");
    }
    else{
      let ul = document.getElementById("list");

      let li = document.createElement("li");
      li.appendChild(document.createTextNode(toDoItem));
      ul.appendChild(li);
      document.getElementById("new-task-description").value = "";
    }
    event.preventDefault();
  }