document.addEventListener("DOMContentLoaded", () => {
    const itemName = document.getElementById("item-name");
    const priority = document.getElementById("priority");
    const dateInput = document.querySelector(".date-input");
    const addItemBtn = document.getElementById("add-item");

    const todayTasksContainer = document.getElementById("second");
    const futureTasksContainer = document.getElementById("third");
    const completedTasksContainer = document.getElementById("fourth");

    dateInput.addEventListener("focus", function () {
        // Change input type to date
        this.type = "date";
        document.querySelector(".icon").style.display = "none";
    });
    
      // Add blur event listener
    dateInput.addEventListener("blur", function () {
        // If input is empty, change type back to text and set placeholder
        if (this.value === "") {
          this.type = "text";
          document.querySelector(".icon").style.display = "block";
        }
    });

    let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

    const saveToLocalStorage = () => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    };

    // Date formatting in d/m/yyyy format
    function dateFormat(date) {
        const [year, month, day] = date.split("-");
        const formattedMonth = month.startsWith("0") ? month[1] : month;
        const formattedDay = day.startsWith("0") ? day[1] : day;
        return `${formattedDay}/${formattedMonth}/${year}`;
    }

    const renderTasks = () => {
        const today = new Date().toISOString().split('T')[0];
        todayTasksContainer.innerHTML = "";
        futureTasksContainer.innerHTML = "";
        completedTasksContainer.innerHTML = "";

        let todayCount = 0;
        let futureCount = 0;
        let completedCount = 0;

        todoList.forEach((item, index) => {
            const container = document.createElement("div");
            container.classList.add("container");
            if (item.date < today && !item.completed) {
                container.classList.add("overdue");
            }
            container.innerHTML = `
                <p>${item.completed ? ++completedCount : item.date === today ? ++todayCount : ++futureCount}. ${item.name}</p>
                <p>${dateFormat(item.date)}</p>
                <p>Priority: ${item.priority}</p>
                <div class="img-fluid">
                    ${item.completed ? `
                    <div class="trash-icon" onclick="deleteTask(${index})">
                        <img class="trash" src="./asset/trash2.svg" alt="trash-icon">
                        <img class="lid" src="./asset/lid2.svg" alt="trash-icon">
                    </div>` : `
                    <div class="check-icon" onclick="toggleComplete(${index})">
                        <img class="tick" src="./asset/check-circle.svg" alt="check-circle">
                        <img class="circle" src="./asset/circle.svg" alt="circle">
                    </div>
                    <div class="trash-icon" onclick="deleteTask(${index})">
                        <img class="trash" src="./asset/trash_icon.svg" alt="trash-icon">
                        <img class="lid" src="./asset/trash_lid.svg" alt="lid">
                    </div>
                    `}
                </div>
            `;
            if (item.completed) {
                completedTasksContainer.appendChild(container);
            } else if (item.date === today) {
                todayTasksContainer.appendChild(container);
            } else {
                futureTasksContainer.appendChild(container);
            }
        });
    };

    window.deleteTask = (index) => {
        todoList.splice(index, 1);
        saveToLocalStorage();
        renderTasks();
    };

    window.toggleComplete = (index) => {
        todoList[index].completed = !todoList[index].completed;
        saveToLocalStorage();
        renderTasks();
    };

    addItemBtn.addEventListener("click", () => {
        const task = {
            name: itemName.value,
            date: dateInput.value,
            priority: priority.value,
            completed: false,
        };

        todoList.push(task);
        saveToLocalStorage();
        renderTasks();

        itemName.value = '';
        dateInput.value = '';
        priority.value = '';
    });

    renderTasks();
});
