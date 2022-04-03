<template>
    <li class="task-item">
        <span>{{ props.item.completed }}</span>
        <span>{{ props.item.id }}</span>
        <span>{{ props.item.title }}</span>
    </li>
</template>

<script setup lang="ts">
    import Task from "@/models/task";
    import { defineProps } from "vue";

    const props = defineProps<{ item: Task }>();
</script>
