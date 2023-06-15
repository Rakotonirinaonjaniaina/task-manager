import React, { ChangeEvent, useRef, useState } from 'react';

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

const TaskManager = () => {
    const createTaskRef = useRef<HTMLInputElement>(null);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [searchTask, setSearchTask] = useState<string>('');

    const handleAddTask = () => {
        const title = createTaskRef.current?.value || "";
        const newTask = {
            id: Date.now(),
            title,
            completed: false,
        };
        setTasks([...tasks, newTask]);
        createTaskRef.current!.value = ""; // Clear the input field
    };

    const handleUpdateTask = (taskId: number, updatedTask: Task) => {
        setTasks(tasks.map((task) =>
            task.id === taskId ? { ...task, ...updatedTask } : task
        ));
    };

    const handleDeleteTask = (taskId: number) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTask(e.target.value);
    };

    const filteredTasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(searchTask.toLowerCase())
    );

    return (
        <div>
            <h1>Task Manager</h1>

            <input type="text" ref={createTaskRef} />

            <button onClick={handleAddTask}>Add Task</button>

            <input type="text" onChange={handleSearch} placeholder="Search Task" />

            <ul>
                {filteredTasks.map((task) => (
                    <li key={task.id}>
                        <input
                            type="text"
                            value={task.title}
                            onChange={(e) =>
                                handleUpdateTask(task.id, { title: e.target.value })
                            }
                        />
                        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskManager;
