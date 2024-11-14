// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDTZg19aoIJC7BExxqCd-cjxy5uAnm-5Wo",
    authDomain: "fir-todo-app-frb.firebaseapp.com",
    projectId: "fir-todo-app-frb",
    storageBucket: "fir-todo-app-frb.appspot.com",
    messagingSenderId: "971708503964",
    appId: "1:971708503964:web:602cd5f3c7831260499a59"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Función para agregar una tarea
async function addTodo() {
    const todoInput = document.getElementById("todo-input").value;
    const dueDateInput = prompt("Fecha de vencimiento (opcional): YYYY-MM-DD");
    const messageDiv = document.getElementById("message");
    
    if (todoInput) {
        try {
            const createdAt = new Date();
            const dueDate = dueDateInput ? new Date(dueDateInput) : null;
            
            await db.collection("todos").add({ text: todoInput, completed: false, createdAt, dueDate });
            document.getElementById("todo-input").value = "";
            showMessage("¡Tarea agregada correctamente!", "green");
        } catch (error) {
            showMessage("Error al agregar la tarea: " + error.message, "red");
        }
    } else {
        showMessage("Por favor, ingresa una tarea.", "red");
    }
}

// Función para mostrar las tareas en tiempo real y aplicar filtros
function loadTodos(filter = "all") {
    let query = db.collection("todos");

    if (filter === "completed") {
        query = query.where("completed", "==", true);
    } else if (filter === "pending") {
        query = query.where("completed", "==", false);
    }

    query.onSnapshot((snapshot) => {
        const todoContainer = document.getElementById("todo-container");
        todoContainer.innerHTML = "";
        snapshot.forEach((doc) => {
            const taskData = doc.data();
            const taskId = doc.id;

            const task = document.createElement("div");
            task.textContent = taskData.text;

            // Mostrar fechas de creación y vencimiento
            if (taskData.createdAt) {
                const createdDate = new Date(taskData.createdAt.seconds * 1000);
                task.textContent += ` (Creado: ${createdDate.toLocaleDateString()})`;
            }

            if (taskData.dueDate) {
                const dueDate = new Date(taskData.dueDate.seconds * 1000);
                task.textContent += ` (Vence: ${dueDate.toLocaleDateString()})`;
            }

            if (taskData.completed) {
                task.style.textDecoration = "line-through";
                task.style.color = "gray";
            }

            const completeButton = document.createElement("button");
            completeButton.textContent = "✔️";
            completeButton.style.marginLeft = "10px";
            completeButton.onclick = () => markAsCompleted(taskId);

            const editButton = document.createElement("button");
            editButton.textContent = "✏️";
            editButton.style.marginLeft = "5px";
            editButton.onclick = () => editTask(taskId, taskData.text);

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "🗑️";
            deleteButton.style.marginLeft = "5px";
            deleteButton.onclick = () => deleteTask(taskId);

            task.appendChild(completeButton);
            task.appendChild(editButton);
            task.appendChild(deleteButton);
            todoContainer.appendChild(task);
        });
    });
}

// Cargar todas las tareas inicialmente
loadTodos();

// Función para editar tarea
function editTask(id, currentText) {
    const newText = prompt("Editar tarea:", currentText);
    if (newText !== null && newText.trim() !== "") {
        db.collection("todos").doc(id).update({ text: newText });
        showMessage("Tarea actualizada", "blue");
    }
}

// Marcar tarea como completada
function markAsCompleted(id) {
    db.collection("todos").doc(id).update({ completed: true });
    showMessage("Tarea marcada como completada", "green");
}

// Eliminar tarea
function deleteTask(id) {
    db.collection("todos").doc(id).delete();
    showMessage("Tarea eliminada", "red");
}

// Función para aplicar filtro
document.getElementById("filter").addEventListener("change", (event) => {
    loadTodos(event.target.value);
});

// Evento para el botón de agregar tarea
document.getElementById("add-button").addEventListener("click", addTodo);

// Función para mostrar mensajes temporales
function showMessage(message, color) {
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = message;
    messageDiv.style.color = color;
    setTimeout(() => {
        messageDiv.textContent = ""; // Limpia el mensaje después de 3 segundos
    }, 3000);
}
