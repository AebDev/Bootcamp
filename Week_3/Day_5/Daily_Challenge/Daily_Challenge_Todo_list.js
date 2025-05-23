let newTask = document.getElementById("newTask");
let addTask = document.getElementById("addTask");
let panel = document.getElementById("panel");
let clear = document.getElementById("clear");

const tasks = [];

addTask.addEventListener("click", addNewTask);
clear.addEventListener("click", clearPanel);


function addNewTask() {

    if (newTask.value !== "") {
        let div = document.createElement("div");
        let remove = document.createElement("button");
        remove.type = "button"
        remove.textContent = "x";
        remove.classList.add("clearbtn");
        let check = document.createElement("input");
        check.type = "checkbox";
        let p = document.createElement("p");
        tasks.push(newTask.value);
        p.textContent = newTask.value;
        div.appendChild(remove);
        div.appendChild(check);
        div.appendChild(p);
        div.classList.add("tasks");
        panel.appendChild(div);

        newTask.value = "";
        remove.addEventListener("click", () => {

            panel.removeChild(div);
            console.log(newTask.value);
            tasks.splice(tasks.indexOf(newTask.value), 1);

        });


        check.addEventListener("click", checkTask);
        function checkTask() {
            if (check.checked) {
                p.style.color = '#FF5162';
                p.style.textDecoration = "line-through";


            } else {
                p.style.color = "#000";
                p.style.textDecoration = "none";

            }
        }

    }
}

function clearPanel() {
    panel.innerHTML = "";
    tasks.splice(0, tasks.length);
}