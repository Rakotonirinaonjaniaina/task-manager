import create from "zustand";

const useTaskManager = create((set) => ({
  tasks: [], // Array to store the tasks
  searchKeyword: "", // Keyword for task search

  // Function to update the search keyword
  setSearchKeyword: (keyword) => set({ searchKeyword: keyword }),

  // Function to add a new task to the list
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),

  // Function to update the details of an existing task
  updateTask: (taskId, updatedTask) =>
      set((state) => ({
        tasks: state.tasks.map((task) =>
            task.id === taskId ? { ...task, ...updatedTask } : task
        ),
      })),

  // Function to delete a task from the list
  deleteTask: (taskId) =>
      set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== taskId),
      })),
}));

export { useTaskManager };
