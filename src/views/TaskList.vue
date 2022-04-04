<template>
    <section class="py-5">
        <router-link to="add" custom v-slot="{ navigate }">
            <button
                @click="navigate"
                class="bg-green-200 py-2 px-5 rounded border-2 hover:bg-green-400 font-semibold"
            >
                + Add task
            </button>
        </router-link>

        <ul class="py-5 divide-y divide-blue-100" v-if="tasksToDisplay.length">
            <TaskItem
                v-for="item in tasksToDisplay"
                :item="item"
                :key="item.id"
                @change-status="changeTaskStatus(item.id)"
                class="py-2"
            />
        </ul>
        <div class="text-center text-sm text-gray-500 italic my-10">
            {{ tasksToDisplay.length }} items matching
        </div>
    </section>
</template>

<script setup lang="ts">
    import TaskItem from "@/components/TaskItem.vue";
    import { useStore } from "vuex";
    import { computed } from "@vue/reactivity";
    import Task from "@/models/task";
    import Show from "@/models/filters";

    const store = useStore();

    const tasksToDisplay = computed(() => {
        switch (store.state.filter) {
            case Show.all:
                return store.state.tasks;
            case Show.active:
                return store.state.tasks.filter(
                    (item: Task) => !item.completed
                );
            case Show.completed:
                return store.state.tasks.filter((item: Task) => item.completed);
        }
    });

    async function changeTaskStatus(id: number) {
        store.dispatch("changeTaskStatus", id);
        await store.dispatch("saveTasks");
    }
</script>
