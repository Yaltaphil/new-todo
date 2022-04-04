<template>
    <li @click="changeStatus" :class="{ completed: props.item.completed }">
        <span>{{ props.item.id }} ----</span>
        <span>{{ props.item.title }}</span>
    </li>
</template>

<script setup lang="ts">
    import Task from "@/models/task";
    import { defineProps, defineEmits } from "vue";

    const props = defineProps<{ item: Task }>();

    const emit = defineEmits(["changeStatus"]);

    function changeStatus() {
        emit("changeStatus");
    }
</script>

<style lang="scss" scoped>
    .completed {
        text-decoration: line-through;
    }
</style>
