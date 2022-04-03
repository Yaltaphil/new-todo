<template>
    <div class="add-task">
        <input type="text" v-model="title" placeholder="type task here" />
        {{ title }}
    </div>
</template>

<script setup lang="ts">
    import { ref } from "vue";

    let title = ref("");
</script>
