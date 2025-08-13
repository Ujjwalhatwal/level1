const taskInput = document.querySelector('#newtask input');
const taskSection = document.querySelector('#tasks');
const noTaskMsg = document.getElementById('no-task-msg');

document.querySelector("#push").onclick = () => {
  createTask();
};

taskInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    createTask();
  }
});

function createTask() {
  const taskValue = taskInput.value.trim();
  if (taskValue === "") {
    alert("The task field is blank. Enter a task name and try again.");
    return;
  }

  const taskHTML = `
    <div class="task">
      <label>
        <input type="checkbox" class="check-task" />
        <p>${taskValue}</p>
      </label>
      <div class="delete">
        <i class="uil uil-trash"></i>
      </div>
    </div>
  `;
  taskSection.innerHTML += taskHTML;
  taskInput.value = "";

  updateTaskVisibility();
}

taskSection.addEventListener("click", function (e) {
  // Checkbox toggle
  if (e.target.classList.contains("check-task")) {
    const taskText = e.target.nextElementSibling;
    taskText.classList.toggle("checked");
  }

  // Delete button
  if (e.target.classList.contains("uil-trash")) {
    e.target.closest(".task").remove();
    updateTaskVisibility();
  }
});

function updateTaskVisibility() {
  const tasks = taskSection.querySelectorAll('.task');
  noTaskMsg.style.display = tasks.length === 0 ? "block" : "none";
}
