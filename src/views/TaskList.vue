<template>
        <ul>
            <TaskItem
                v-for="item in store.state.tasks"
                :item="item"
                :key="item.id"
            />
        </ul>
</template>

<script setup lang="ts">
    import TaskItem from "@/components/TaskItem.vue";
    import { useStore } from "vuex";

    const store = useStore();
</script>
