<template>
    <div class="my-5 py-5">
        <span class="px-1 font-semibold"> New task: </span>

        <input
            type="text"
            v-model.trim.lazy="title"
            @keyup.enter="addTask"
            placeholder="type here"
            autofocus
            class="placeholder:pl-2 outline-0"
        />

        <button
            @click="addTask"
            class="bg-green-200 px-8 rounded border-2 hover:bg-green-400 font-semibold"
        >
            Add
        </button>
    </div>
</template>

<script setup lang="ts">
    import { useStore } from "vuex";
    import { ref } from "vue";
    import router from "@/router";

    const store = useStore();

    const title = ref("");

    function addTask() {
        if (title.value) {
            store.dispatch("setTasks", [
                ...store.state.tasks,
                {
                    id: Date.now(),
                    title: title.value,
                    completed: false,
                },
            ]);
            router.push("/");
        }
    }
</script>
