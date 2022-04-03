import { createStore } from "vuex";
import Task from "@/models/task";

export default createStore({
    state: {
        tasks: [
            {
                id: 1,
                title: "test item",
                completed: false,
            },
            {
                id: 2,
                title: "test item",
                completed: true,
            },
            {
                id: 3,
                title: "test item",
                completed: false,
            },
        ] as Array<Task>,
    },

    getters: {
        tasksCount(state) {
            return state.tasks.length;
        },
    },

    mutations: {

    },

    actions: {

    },

    modules: {},
});
