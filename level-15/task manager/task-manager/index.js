const fs = require('fs');
const path = './tasks.json';

// Helper: Load tasks from JSON
function loadTasks() {
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, '[]');
    }
    const data = fs.readFileSync(path, 'utf-8');
    return JSON.parse(data);
}

// Helper: Save tasks to JSON
function saveTasks(tasks) {
    fs.writeFileSync(path, JSON.stringify(tasks, null, 2));
}

// Command: Add a new task
function addTask(description) {
    const tasks = loadTasks();
    const newTask = {
        id: Date.now(),
        description,
        completed: false
    };
    tasks.push(newTask);
    saveTasks(tasks);
    console.log(`✅ Task added: "${description}"`);
}

// Command: List all tasks
function listTasks() {
    const tasks = loadTasks();
    if (tasks.length === 0) {
        console.log("📭 No tasks found.");
        return;
    }
    tasks.forEach((task, index) => {
        const status = task.completed ? "✔" : "❌";
        console.log(`${index + 1}. [${status}] ${task.description} (ID: ${task.id})`);
    });
}

// Command: Update a task
function updateTask(id, newDescription) {
    const tasks = loadTasks();
    const task = tasks.find(t => t.id == id);
    if (task) {
        task.description = newDescription;
        saveTasks(tasks);
        console.log(`🔁 Task updated to: "${newDescription}"`);
    } else {
        console.log(`❌ Task with ID ${id} not found.`);
    }
}

// Command: Delete a task
function deleteTask(id) {
    let tasks = loadTasks();
    const originalLength = tasks.length;
    tasks = tasks.filter(t => t.id != id);
    if (tasks.length < originalLength) {
        saveTasks(tasks);
        console.log(`🗑️ Task with ID ${id} deleted.`);
    } else {
        console.log(`❌ Task with ID ${id} not found.`);
    }
}

// CLI Argument Handling
const [,, command, ...args] = process.argv;

switch (command) {
    case 'add':
        addTask(args.join(' '));
        break;
    case 'list':
        listTasks();
        break;
    case 'update':
        updateTask(args[0], args.slice(1).join(' '));
        break;
    case 'delete':
        deleteTask(args[0]);
        break;
    default:
        console.log(`
📘 Usage:
  node index.js add "Task description"
  node index.js list
  node index.js update <task_id> "New description"
  node index.js delete <task_id"
        `);
}
