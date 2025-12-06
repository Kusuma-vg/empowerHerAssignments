# Enhanced Todo List Application

This Todo List application allows users to add, complete, delete, and search tasks with full data persistence using **localStorage**.

---

## 🚀 Features

### ✔ Add Tasks

Users can type a task into the input field and click **Add Task** to save it.
Each task is stored as an object with:

* `id` (unique value)
* `text` (task content)
* `completed` (true/false)

### ✔ Mark Tasks as Completed

Each task has a **✔ button** that toggles its completed state.
Completed tasks are shown with:

* Gray text
* Line-through decoration

### ✔ Delete Tasks

Each task has a **✖ button** to remove it from the list.
Deletion updates localStorage immediately.

### ✔ Real-Time Search

The search bar filters tasks as the user types.
It supports partial and case-insensitive matching.

### ✔ Persistent Storage (localStorage)

All tasks are saved in **localStorage** as a JSON array.
Tasks automatically load when the page is refreshed.

---

## 📂 Project Structure

```
index.html  ← Contains full HTML, CSS, and JavaScript
README.md   ← Documentation
```

---

## 🧠 How It Works

### 1. Adding a Task

* User enters text into input.
* JS creates a new task object.
* Task is added to the array and saved in localStorage.

### 2. Showing Tasks

The app builds `<li>` elements dynamically and updates the DOM.

### 3. Completing a Task

* On clicking ✔, task.completed toggles.
* UI updates immediately.

### 4. Searching Tasks

* Filters tasks based on search text.
* Only matching tasks are rendered.

### 5. Saving/Loading Tasks

* Tasks are stored in:

```
localStorage.setItem("tasks", JSON.stringify(tasks));
```

* Loaded on page refresh using:

```
JSON.parse(localStorage.getItem("tasks"))
```

---

## 📝 How to Use

1. Open the webpage in any modern browser.
2. Type a task in the **"Enter task..."** box.
3. Click **Add Task**.
4. Use:

   * ✔ to mark a task completed
   * ✖ to delete a task
5. Use the **search bar** to filter tasks live.
6. Refresh the page — tasks stay saved.

---

## 💡 Requirements

* Any modern web browser (Chrome, Edge, Firefox, Safari).
* No external libraries required.

---

## 📜 License

This project is free to use for education and personal projects.
