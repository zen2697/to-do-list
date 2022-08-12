todoList = [];
const input = document.getElementById("todo-input");

function submit() {
  // const inputValue = document.getElementById("todo-input").value;
  const inputValue = input.value;
  if (inputValue === "") {
    alert("Fill your task out.");
  } else {
    todoList.push(inputValue);
    document.querySelector("ul").innerHTML += `<li>${inputValue}</li>`;
    document.getElementById("todo-input") = "";
  }
}
