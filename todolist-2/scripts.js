// const submitBtn = document.querySelector("#submit-btn");
// submitBtn.addEventListener("click", submit);

// const input = document.getElementById("todo-input");

// todoList = [];

// function submit() {
//   const inputValue = input.value;
//   todoList.push(inputValue);
//   document.querySelector("ul").innerHTML += `<li>${inputValue}</li>`;
//   document.getElementById("todo-input").value = "";
// }

// // Test
// var colors = ["yellow", "green", "blue"];
// index = 0;
// const working = document.querySelector("ul");
// working.addEventListener("click", function onClick(event) {
//   event.target.style.backgroundColor = colors[index];
//   index = (index + 1) % colors.length;
// });

/////////////////////

todoList = [];
inprogressList = [];
doneList = [];

color = ["#F2D7D9", "#9CB4CC", "#C4DFAA"];

const submitBtn = document.querySelector("#submit-btn");
submitBtn.addEventListener("click", submit);

const input = document.querySelector("#todo-input");

// Click Submit button to submit value
function submit() {
  const inputValue = input.value;
  todoList.push(inputValue);
  document.querySelector(
    "#main-contents"
  ).innerHTML += `<td>${inputValue}</td>`;
  document.getElementById("todo-input").value = "";
}

// Press ENTER button to submit
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    submit();
  }
});

// // Click <li> to change color
index = [0];
const changeColors = document.querySelector("tbody");
changeColors.addEventListener("click", (event) => {
  event.target.style.backgroundColor = color[index];
  index = (index + 1) % color.length;
  const targetValue = event.target.innerText;

  if (targetValue.includes(todoList)) {
    inprogressList.push(targetValue);
    console.log(targetValue);
    document.querySelector(
      "#inprogress-content"
    ).innerHTML += `<td>${targetValue}</td>`;
    document.querySelector("#todo-content").targetValue = "";
  } else if (targetValue.includes(inprogressList)) {
    doneList.push(targetValue);
    console.log(targetValue);
    document.querySelector(
      "#done-content"
    ).innerHTML += `<td>${targetValue}</td>`;
  } else if (targetValue.includes(doneList)) {
    todoList.push(targetValue);
    console.log(targetValue);
    document.querySelector(
      "#todo-content"
    ).innerHTML += `<td>${targetValue}</td>`;
  }
});
