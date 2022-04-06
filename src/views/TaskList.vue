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
        <ul v-if="getTasksToDisplayCount" class="py-5 divide-y divide-blue-100">
            <TaskItem
                v-for="item in getTasksToDisplay"
                :item="item"
                :key="item.id"
                @change-status="changeTaskStatus(item.id)"
                class="py-2"
            />
        </ul>
        <div v-else class="text-center text-sm text-gray-500 italic my-10">
            No items found ...
        </div>
    </section>
</template>

<script setup lang="ts">
    import TaskItem from "@/components/TaskItem.vue";
    import { useStore } from "vuex";
    import { computed } from "@vue/reactivity";

    const store = useStore();

    const getTasksToDisplay = computed(() => store.getters.getTasksToDisplay);
    const getTasksToDisplayCount = computed(
        () => store.getters.getTasksToDisplayCount
    );

    function changeTaskStatus(id: number): void {
        store.dispatch("changeTaskStatus", id);
    }
</script>
