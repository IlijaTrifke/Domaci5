let circle = document.querySelector(".circle");
let task = document.querySelector("#task");
let ul = document.querySelector("ul");
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  const newTask = document.createElement("div");

  if (task.value === "") {
    alert("Task can not be empty!");
  } else {
    newTask.innerHTML = `
  <p> ${task.value} </p>
  <div class="buttons">
  <i class="fa fa-circle-o" aria-hidden="true"></i>
  <i class="fa-solid fa-pen-to-square edit"></i> 
  <i class="fa-solid fa-xmark"></i>
  </div>
    `;
    newTask.classList.add("newTask");
    li.append(newTask);
    ul.prepend(li);
  }
  task.value = "";
});

circle.addEventListener("click", () => {
  const li = document.createElement("li");
  const newTask = document.createElement("div");

  if (task.value === "") {
    alert("Task can not be empty!");
  } else {
    newTask.innerHTML = `
  <p> ${task.value} </p>
  <div class="buttons">
  <i class="fa fa-circle-o" aria-hidden="true"></i>
  <i class="fa-solid fa-pen-to-square edit"></i> 
  <i class="fa-solid fa-xmark"></i>
  </div>
    `;
    newTask.classList.add("newTask");
    li.append(newTask);
    ul.prepend(li);
  }
  task.value = "";
});

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-xmark")) {
    e.target.parentElement.parentElement.parentElement.remove();
  }
});

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-circle-o")) {
    e.target.classList.replace("fa-circle-o", "fa-check-circle");
    e.target.parentElement.parentElement
      .querySelector("p")
      .classList.toggle("checked");
    e.target.parentElement.parentElement.firstElementChild.classList.toggle(
      "blur"
    );
    e.target.parentElement.children[1].classList.toggle("blur");
    e.target.parentElement.children[2].classList.toggle("biggerScale");
  } else {
    e.target.classList.replace("fa-check-circle", "fa-circle-o");
    e.target.parentElement.parentElement
      .querySelector("p")
      .classList.remove("checked");
    e.target.parentElement.parentElement.firstElementChild.classList.remove(
      "blur"
    );
    e.target.parentElement.children[1].classList.remove("blur");
    e.target.parentElement.children[2].classList.remove("biggerScale");
  }
});

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-pen-to-square")) {
    const p = e.target.parentElement.parentElement.firstElementChild;
    const input = document.createElement("input");
    const button = e.target;
    const newTask = e.target.parentElement.parentElement;
    input.type = "text";
    p.textContent.trim;
    input.value = p.textContent;
    newTask.insertBefore(input, p);
    console.log(newTask);
    newTask.removeChild(p);
    button.classList.remove("fa-solid", "fa-pen-to-square", "edit");
    button.classList.add("fa", "fa-check");
  } else if (e.target.classList.contains("fa-check")) {
    const newTask = e.target.parentElement.parentElement;
    const input = newTask.firstElementChild;
    const p = document.createElement("p");
    const button = e.target;
    p.textContent = input.value;
    newTask.insertBefore(p, input);
    newTask.removeChild(input);
    button.classList.remove("fa", "fa-check");
    button.classList.add("fa-solid", "fa-pen-to-square", "edit");
  }
});

// list.addEventListener("click", (e) => {
//   if (
//     e.target.classList.contains("fa-pen-to-square") &&
//     e.target.classList.contains("edit")
//   ) {
//     const par = document.querySelector(".newItem");
//     const editPar = par.children[0].innerHTML;
//     const input = document.createElement("input");
//     input.type = "text";
//     input.value = editPar;
//     list.firstElementChild.insertBefore(input, par);
//     console.log(par);
//     console.log(list.children[0].children[1].children[0]);
//     list.children[0].children[1].children[0].remove();
//     e.target.classList.remove("edit");
//     e.target.classList.add("save");
//   } else if (
//     e.target.classList.contains("fa-pen-to-square") &&
//     e.target.classList.contains("save")
//   ) {
//     const dunja = document.querySelector(".newItem");
//     const par = list.children[0].children[0].value;
//     list.children[0].children[0].remove;
//     const editPar = document.createElement("p");
//     editPar.textContent = par;
//     dunja.classList.add("dunja");
//     list.firstElementChild.insertBefore(editPar, dunja);
//     list.children[0].children[0].remove();
//     e.target.classList.remove("save");
//     e.target.classList.add("edit");
//   }
// });

const date = new Date();

const day = date.getDate();
const number = document.querySelector(".day");
number.innerHTML = day;

const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const mesec = month[date.getMonth()];

const mth = document.querySelector(".month-year");
mth.firstElementChild.innerHTML = mesec;

const godina = date.getFullYear();
const year = document.querySelector(".month-year");
year.lastElementChild.innerHTML = godina;

let dayOfWeekContainer = document.querySelector(".days");

switch (new Date().getDay()) {
  case 0:
    dayOfWeekContainer.scrollLeft = 0;
    dayOfWeekContainer.classList.add("biggerMargin");
    break;
  case 1:
    dayOfWeekContainer.scrollLeft = 115;
    break;
  case 2:
    dayOfWeekContainer.scrollLeft = 255;
    break;
  case 3:
    dayOfWeekContainer.scrollLeft = 395;
    break;
  case 4:
    dayOfWeekContainer.scrollLeft = 520;
    break;
  case 5:
    dayOfWeekContainer.scrollLeft = 670;
    break;
  case 6:
    dayOfWeekContainer.scrollLeft = 800;
    break;
  default:
}
