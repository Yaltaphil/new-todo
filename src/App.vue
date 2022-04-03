<template>
    <nav>
        <!-- <router-link to="/">TaskList</router-link> | -->
        <!-- <router-link :to="{ name: 'TaskItem' }">Add task</router-link> -->
    </nav>
    <h1>Your list</h1>

    <ul>
        <TaskItem
            v-for="item in tasksToDisplay"
            :key="item.id"
            :item="item"
        />
    </ul>
    <h2>router</h2>
    <router-view/>
    <div>
        <span>{{ counter }} item left</span>
        <span>
            <input
                id="all-tasks"
                v-model="filter"
                type="radio"
                value="all"
            />All</span
        >
        <span>
            <input
                id="active-tasks"
                v-model="filter"
                type="radio"
                value="active"
            />Active</span
        >
        <span>
            <input
                id="completed-tasks"
                v-model="filter"
                type="radio"
                value="completed"
            />Completed</span
        >

        <span> <button>Clear completed</button></span>
    </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import { computed, ref } from '@vue/reactivity'
import Task from '@/models/task'
import filters from '@/models/filters'
import TaskItem from '@/components/TaskItem.vue'

const store = useStore()

const filter = ref(filters.all)

const counter = computed(() => store.getters.tasksCount)

const tasksToDisplay = computed(() => {
  switch (filter.value) {
    case filters.all:
      return store.state.tasks
    case filters.active:
      return store.state.tasks.filter(
        (item: Task) => !item.completed,
      )
    case filters.completed:
      return store.state.tasks.filter((item: Task) => item.completed)
  }
})
</script>
