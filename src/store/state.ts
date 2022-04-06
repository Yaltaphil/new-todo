import Task from "@/models/task";
import Filter from "@/models/filters";

export default () => ({
    tasks: [] as Array<Task>,
    filter: Filter.all,
});
