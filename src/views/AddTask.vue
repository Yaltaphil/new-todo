<template>
    <div class="my-5 py-5">
        <span class="px-1 font-semibold"> New task: </span>

        <input
            ref="input"
            type="text"
            v-model.trim.lazy="title"
            @keyup.enter="addTask"
            placeholder="type here"
            class="placeholder:pl-2 outline-0"
            v-focus
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
    import { ref, VueElement } from "vue";
    import router from "@/router";

    const store = useStore();

    // const input = ref<null | { focus: () => null }>(null);

    const title = ref("");

    const vFocus = {
        mounted: (el: VueElement) => el.focus(),
    };

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

    // onMounted(() => {
    //     input.value?.focus();
    // });
</script>
