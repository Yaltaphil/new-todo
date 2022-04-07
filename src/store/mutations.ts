import { State } from "./state";
import { MutationTree } from "vuex";
import Filter from "@/models/filters";
import Task from "@/models/task";

const mutations: MutationTree<State> = {
    SET_FILTER(state: State, payload: Filter) {
        state.filter = payload;
    },

    SET_TASKS(state: State, payload: Task[] = []) {
        state.tasks = payload;
    },

    SET_TASK_STATUS(state: State, idx: number) {
        state.tasks[idx].completed = !state.tasks[idx].completed;
    },
};

export default mutations;
