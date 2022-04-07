import { ActionTree, ActionContext } from "vuex";
import { State } from "./state";
import Filter from "@/models/filters";
import Task from "@/models/task";

type Context = ActionContext<State, State>;

const actions: ActionTree<State, State> = {
    setFilter({ commit }: Context, payload: Filter): void {
        commit("SET_FILTER", payload);
    },

    loadTasks({ commit }: Context): void {
        const local = localStorage.getItem("newToDoList");
        local && commit("SET_TASKS", JSON.parse(local));
    },

    saveTasks({ state }: Context): void {
        localStorage.setItem("newToDoList", JSON.stringify(state.tasks));
    },

    setTasks({ commit, dispatch }: Context, payload: Task[]): void {
        commit("SET_TASKS", payload);
        dispatch("saveTasks");
    },

    changeTaskStatus({ commit, dispatch, state }: Context, id: number): void {
        const idx = state.tasks.findIndex((item) => item.id === id);
        ~idx && commit("SET_TASK_STATUS", idx);
        dispatch("saveTasks");
    },

    clearCompleted({ commit, dispatch, state }: Context): void {
        commit(
            "SET_TASKS",
            state.tasks.filter((item) => !item.completed)
        );
        dispatch("saveTasks");
    },
};

export default actions;
