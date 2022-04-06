import { createStore } from "vuex";
import state from "./state";
import Task from "@/models/task";
import Filter from "@/models/filters";

export default createStore({
    state,

    getters: {
        getTaskFilter(state): Filter {
            return state.filter;
        },

        getTasksCount(state): number {
            return state.tasks.length;
        },

        isCompletedTasksPresent(state): boolean {
            return state.tasks.some((item) => item.completed);
        },

        getTasksToDisplay(state): Task[] {
            switch (state.filter) {
                case Filter.all:
                    return state.tasks;
                case Filter.active:
                    return state.tasks.filter((item: Task) => !item.completed);
                case Filter.completed:
                    return state.tasks.filter((item: Task) => item.completed);
            }
        },

        getTasksToDisplayCount(state, getters): number {
            return getters.getTasksToDisplay.length;
        },
    },

    mutations: {
        SET_FILTER(state, value) {
            state.filter = value;
        },

        SET_TASKS(state, value = []) {
            state.tasks = value;
        },

        SET_TASK_STATUS(state, idx) {
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

        setTasks({ commit, dispatch }, payload) {
            commit("SET_TASKS", payload);
            dispatch("saveTasks");
        },

        changeTaskStatus({ commit, dispatch, state }, id: number) {
            const idx = state.tasks.findIndex((item) => item.id === id);
            ~idx && commit("SET_TASK_STATUS", idx);
            dispatch("saveTasks");
        },

        clearCompleted({ commit, dispatch, state }) {
            commit(
                "SET_TASKS",
                state.tasks.filter((item) => !item.completed)
            );
            dispatch("saveTasks");
        },
    },
});
