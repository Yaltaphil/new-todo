<template>
    <main>
        <h1>Your task list</h1>

        <router-view />

        <div>
            <span>Total: {{ counter }} items</span>
            <span> <input v-model="filter" type="radio" value="all" />All</span>
            <span>
                <input
                    v-model="filter"
                    type="radio"
                    value="active"
                />Active</span
            >
            <span>
                <input
                    v-model="filter"
                    type="radio"
                    value="completed"
                />Completed</span
            >
            {{ filter }}
            <span>
                <button @click="clearCompleted">Clear completed</button>
            </span>
        </div>
    </main>
</template>

<script lang="ts" setup>
    import { useStore } from "vuex";
    import { computed, ref } from "@vue/reactivity";
    import { onMounted, watch } from "vue";

    const store = useStore();

    const filter = ref(store.state.filter);

    const counter = computed(() => store.getters.tasksCount);

    watch(filter, (filter) => {
        store.dispatch("setFilter", filter);
    });

    onMounted(async () => await store.dispatch("loadTasks"));

    function clearCompleted() {
        store.dispatch("clearCompleted");
    }
</script>
