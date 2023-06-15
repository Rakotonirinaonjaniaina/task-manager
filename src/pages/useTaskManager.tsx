import React from "react";
import { useTaskManager } from "../store/useTaskManager";

const TaskManagerComponent = () => {
    const taskManager = useTaskManager();

    // Use the hook functions to perform operations on tasks
    const handleAddTask = () => {
        const newTask = { id: 1, title: "New Task" };
        taskManager.addTask(newTask);
    };

    const handleUpdateTask = () => {
        const taskId = 1;
        const updatedTask = { title: "Updated Task" };
        taskManager.updateTask(taskId, updatedTask);
    };

    const handleDeleteTask = () => {
        const taskId = 1;
        taskManager.deleteTask(taskId);
    };

    // Display tasks and perform other operations as needed

    return (
        <div>
            <button onClick={handleAddTask}>Add Task</button>
            <button onClick={handleUpdateTask}>Update Task</button>
            <button onClick={handleDeleteTask}>Delete Task</button>
        </div>
    );
};

export default TaskManagerComponent;
