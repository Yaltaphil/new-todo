import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import TaskList from "../views/TaskList.vue";
import AddTask from "../views/AddTask.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "TaskList",
        component: TaskList,
    },
    {
        path: "/add",
        name: "AddTask",
        component: AddTask,
    },
    {
        path: "/:pathMatch(.*)*",
        component: TaskList
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
