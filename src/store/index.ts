import { createStore } from "vuex";
import Task from "@/models/task";
import Show from "@/models/filters";

export default createStore({
    state: {
        tasks: [] as Array<Task>,

        filter: Show.all,
    },

    getters: {
        tasksCount(state): number {
            return state.tasks.length;
        },

        haveCompletedTasks(state): boolean {
            return state.tasks.some((item) => item.completed);
        },
    },

    mutations: {
        SET_FILTER(state, value) {
            state.filter = value;
        },

        SET_TASKS(state, value = []) {
            state.tasks = value;
        },

        INVERT_TASK_STATUS(state, idx) {
            state.tasks[idx].completed = !state.tasks[idx].completed;
        },
    },

    actions: {
        setFilter({ commit }, payload) {
            commit("SET_FILTER", payload);
        },

        loadTasks({ commit }) {
            const local = localStorage.getItem("newToDoList");
            local && commit("SET_TASKS", JSON.parse(local));
        },

        saveTasks(context) {
            localStorage.setItem(
                "newToDoList",
                JSON.stringify(context.state.tasks)
            );
        },

        addTask({ commit }, payload) {
            commit("SET_TASKS", payload);
        },

        changeTaskStatus(context, id: number) {
            const idx = context.state.tasks.findIndex((item) => item.id === id);
            ~idx && context.commit("INVERT_TASK_STATUS", idx);
        },

        clearCompleted({ commit, state }) {
            commit(
                "SET_TASKS",
                state.tasks.filter((item) => !item.completed)
            );
        },
    },
});
