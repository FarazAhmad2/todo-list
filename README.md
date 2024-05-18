# To-Do List

A simple, responsive to-do list application that allows users to add, manage, and track tasks. Tasks are categorized into Today's TodoList, Future TodoList, and Completed TodoList.

## Features

- **Add Tasks**: Enter task name, deadline, and priority.
- **Categorize Tasks**: Tasks are categorized into today’s tasks, future tasks, and completed tasks.
- **Task Actions**: Mark tasks as completed and delete tasks.
- **Persistent Storage**: Tasks are saved in local storage.

## Technologies Used

- HTML
- CSS
- JavaScript

## Usage

1. **Adding a Task**:
   - Enter the task name in the "Item Name" input field.
   - Enter the deadline in the "Deadline" input field. The input field will change to a date picker when focused.
   - Select the priority (Low, Medium, High) from the "Priority" dropdown.
   - Click the "Add Item" button to add the task.

2. **Task Lists**:
   - Tasks with today’s date will appear under "Today's TodoList".
   - Tasks with a future date will appear under "Future TodoList".
   - Completed tasks will appear under "Completed TodoList".

3. **Mark as Completed**:
   - Click the check icon next to a task in "Today's TodoList" or "Future TodoList" to move it to the "Completed TodoList".

4. **Delete a Task**:
   - Click the trash icon next to a task in any list to delete it.