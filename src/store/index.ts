import { createStore } from "vuex";
import Task from "@/models/task";
import Show from "@/models/filters";

export default createStore({
    state: {
        tasks: [] as Array<Task>,

        filter: Show.all,
    },

    getters: {
        tasksCount(state) {
            return state.tasks.length;
        },

        activeFilter(state) {
            return state.filter;
        },
    },

    mutations: {
        setFilter(state, value) {
            state.filter = value;
        },

        setTasks(state, value = []) {
            state.tasks = value;
        },
    },

    actions: {
        setFilter({ commit }, value) {
            commit("setFilter", value);
        },

        async loadTasks({ commit }) {
            const local = localStorage.getItem("newToDoList");
            local && commit("setTasks", JSON.parse(local));
        },

        async saveTasks(context) {
            localStorage.setItem(
                "newToDoList",
                JSON.stringify(context.state.tasks)
            );
        },
    },

});
