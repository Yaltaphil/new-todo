<template>
    <main class="container mx-auto border bg-slate-100 rounded-xl p-8">
        <div class="mb-3 text-xs text-gray-500">
            Тестовое задание <br />
            Реализовать to-do лист. Требования: 1. Использовать router-view 2.
            Использовать store, минимум логики в компонентах и view 3.
            Добавление новой задачи по нажатию кнопки Enter 4. При нажатии на
            задачу - делать её выполненной 5. Отображать счётчик задач 6. Кнопки
            фильтров: Все, выполненные, активные 7. Кнопка clear completed если
            хотя бы одна задача выполнена 8. При перезагрузке страницы задачи и
            их статусы не должны сбрасываться
        </div>
        <div class="mb-10 text-xs text-gray-600">
            ----- <br />
            vue3 + composition api + vuex + tailwinscss <br />
            стилизация минимальная <br />
            отдельный роут на /add task <br />
            все данные в vuex store <br />
            выгрузка загрузка из localstore<br />
            <a class="text-red-700" href="https://github.com/Yaltaphil/new-todo"
                >https://github.com/Yaltaphil/new-todo</a
            >
        </div>
        <hr />

        <h1 class="text-3xl font-bold py-5 text-center">TO DO</h1>

        <router-view />

        <nav class="p-2 mt-5 flex justify-between">
            <div>Total: {{ counter }} items</div>
            <div class="flex space-x-5">
                <span>
                    <input
                        v-model="activeFilter"
                        type="radio"
                        value="all"
                        class="m-1"
                    />All</span
                >
                <span>
                    <input
                        v-model="activeFilter"
                        type="radio"
                        value="active"
                        class="m-1"
                    />Active
                </span>
                <span>
                    <input
                        v-model="activeFilter"
                        type="radio"
                        value="completed"
                        class="m-1"
                    />Completed
                </span>
            </div>
            <div>
                <button
                    @click="clearCompleted"
                    :disabled="!haveCompletedTasks"
                    class="bg-red-100 px-5 py-1 rounded border disabled:bg-gray-100 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                >
                    Clear completed tasks
                </button>
            </div>
        </nav>
    </main>
</template>

<script lang="ts" setup>
    import { useStore } from "vuex";
    import { computed, ref } from "@vue/reactivity";
    import { onMounted, watch } from "vue";
    import router from "./router";

    const store = useStore();

    const activeFilter = ref(store.state.filter);

    const counter = computed(() => store.getters.tasksCount);
    const haveCompletedTasks = computed(() => store.getters.haveCompletedTasks);

    watch(activeFilter, (filter) => {
        store.dispatch("setFilter", filter);
    });

    onMounted(async () => {
        store.dispatch("loadTasks");
        window.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                router.push("/add");
            }
        });
    });

    function clearCompleted() {
        store.dispatch("clearCompleted");
        store.dispatch("saveTasks");
    }
</script>
