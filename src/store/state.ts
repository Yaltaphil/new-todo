import Task from "@/models/task";
import Filter from "@/models/filters";

export interface State {
    tasks: Task[];
    filter: Filter;
}

export const state: State = {
    tasks: [],
    filter: Filter.all,
};
