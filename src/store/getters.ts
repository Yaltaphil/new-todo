import { State } from "./state";
import { GetterTree } from "vuex";
import Filter from "@/models/filters";
import Task from "@/models/task";

const getters: GetterTree<State, State> = {
    getTaskFilter(state: State): Filter {
        return state.filter;
    },

    getTasksCount(state: State): number {
        return state.tasks.length;
    },

    getTasksToDisplay(state: State): Task[] {
        switch (state.filter) {
            case Filter.all:
                return state.tasks;
            case Filter.active:
                return state.tasks.filter((item: Task) => !item.completed);
            case Filter.completed:
                return state.tasks.filter((item: Task) => item.completed);
        }
    },

    getTasksToDisplayCount(state: State): number {
        return getters.getTasksToDisplay(state, getters, state, getters).length;
    },

    isCompletedTasksPresent(state: State): boolean {
        return state.tasks.some((item) => item.completed);
    },
};

export default getters;
