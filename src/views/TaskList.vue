<template>
    <section>
        <ul>
            <TaskItem
                v-for="item in tasksToDisplay"
                :item="item"
                :key="item.id"
            />
        </ul>
        <router-view></router-view>
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
</script>
