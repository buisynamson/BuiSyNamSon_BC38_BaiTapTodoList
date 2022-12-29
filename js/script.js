const input = document.getElementById("newTask");
const addBtn = document.getElementById("addItem");
addBtn.addEventListener("click", function () {
  addList();
});

const sort = document.getElementById("two");
sort.addEventListener('click',function () {
  sortListAZ("todo");
  sortListAZ("completed");
})

const sort_ZA = document.getElementById("three");
sort_ZA.addEventListener('click',function () {
  sortListZA("todo");
  sortListZA("completed");
})



function addList() {
  const Todo = document.getElementById("todo");
 
  const Completed = document.getElementById("completed");

  const newLi = document.createElement("li");

  const divButtons = document.createElement("div");
  divButtons.classList.add("buttons");
  const delBtn = document.createElement("button");

  const checkBtn = document.createElement("button");

  checkBtn.innerHTML = '<i class="fas fa-check-circle complete"></i>';
  delBtn.innerHTML = '<i class="far fa-trash-alt remove"></i>';

  if (input.value !== "") {
    newLi.textContent = input.value;

    input.value = "";

    Todo.appendChild(newLi);
    newLi.appendChild(divButtons);
    divButtons.appendChild(delBtn);
    divButtons.appendChild(checkBtn);
  }

  checkBtn.addEventListener("click", function () {
    const parent = this.parentElement.parentElement;
    parent.remove();
    Completed.appendChild(parent);
    checkBtn.style.display = "none";
  });

  delBtn.addEventListener("click", function () {
    const parent = this.parentElement.parentElement;
    parent.remove();

  });

}

function sortListAZ(ul) {
  var ul = document.getElementById(ul);

  Array.from(ul.getElementsByTagName("LI"))
    .sort((a, b) => a.textContent.localeCompare(b.textContent))
    .forEach(li => ul.appendChild(li));
}

function sortListZA(ul) {
  var ul = document.getElementById(ul);

  Array.from(ul.getElementsByTagName("LI"))
    .sort((a,b) => b.textContent.localeCompare(a.textContent))
    .forEach(li => ul.appendChild(li));
}

