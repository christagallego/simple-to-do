<template>
  <div class="container py-8">
    <div class="flex justify-between mb-8">
      <h1 class="text-3xl font-bold underline text-violet-600">To Do</h1>
      <button class="bg-violet-600 hover:bg-violet-500 text-white py-2 px-5">
        Add task
      </button>
    </div>
    {{ tasks?.data }}
    <ul>
      <li v-for="task in tasks?.data" :key="task.id" class="mb-4">
        <Task
          :task="task"
          @delete-task="deleteTask"
          @change-status="changeStatus"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { Task } from '~/types'
const { find, update } = useStrapi()
const { data: tasks, refresh } = await useAsyncData(
  'tasks',
  () => find<Task>('tasks'),
  {
    server: false
  }
)

const changeStatus = async (ev) => {
  console.log('ev', ev)
  await update<Task>('tasks', ev.id, {
    completed: !ev.isCompleted
  })
  refresh()
}
</script>
