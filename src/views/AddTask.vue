<template>
    <div>
        <span> New task: </span>

        <input
            type="text"
            v-model="title"
            @keyup.enter="addTask"
            placeholder="type here"
        />

        <button @click="addTask">Add</button>
    </div>
</template>

<script setup lang="ts">
    import { useStore } from "vuex";
    import { ref } from "vue";
    import router from "@/router";

    const store = useStore();

    const title = ref("");

    function addTask() {
        const item = {
            id: Date.now(),
            title: title.value,
            completed: false,
        };
        store.dispatch("addTask", [...store.state.tasks, item]);
        router.push("/");
    }
</script>
