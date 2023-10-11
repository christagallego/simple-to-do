<template>
  <div class="container py-8">
    <div class="flex justify-between mb-8">
      <h1 class="text-3xl font-bold underline text-violet-600">To Do</h1>
      <button class="bg-violet-600 hover:bg-violet-500 text-white py-2 px-5">
        Add task
      </button>
    </div>
    <ul>
      <li v-for="task in tasks" :key="task.id + '-' + keyId" class="mb-4">
        <Task :task="task" @change-status="changeStatus" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'

interface Task {
  id: number
  attributes: {
    title: string
    description: string
    completed: boolean
  }
}

const tasks = ref<Task[]>([])
const keyId = ref<number>(0)

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:1337/api/tasks')
    tasks.value = response.data.data
  } catch (error) {
    console.error('Error fetching Strapi data:', error)
  }
}

const changeStatus = async ({ id, newStatus }) => {
  try {
    const response = await axios.put(`http://localhost:1337/api/tasks/${id}`, {
      data: {
        completed: newStatus
      }
    })

    const updatedTasks = tasks.value.map((task) => {
      if (task.id === id) {
        task.attributes.completed = newStatus
      }
      return task
    })

    tasks.value = updatedTasks
    keyId.value++
  } catch (error) {
    console.error('Error changing task status:', error)
    if (error.response) {
      console.error('Response data:', error.response.data)
    }
  }
}

onMounted(() => {
  fetchData()
})
</script>
