<template>
    <li @click="changeStatus" class="text-lg hover:cursor-pointer hover:bg-teal-100">
        <span v-if="props.item.completed" class="text-green-700 font-bold p-3"
            >&checkmark;</span
        >
        <span v-else class="font-semibold p-3">&#9900;</span>

        <span :class="{ 'line-through': props.item.completed }"
        class="font-semibold text-zink-900"
            >{{ props.item.title }}
        </span>
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
