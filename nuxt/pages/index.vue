<template>
  <h1 class="text-2xl font-bold underline">Hello! {{ tasks }}</h1>
</template>

<script setup lang="ts">
import type { Task } from '~/types'
const { find } = useStrapi()
const { data: dataRes } = await useAsyncData(
  'tasks',
  () => find<Task>('tasks'),
  {
    server: false
  }
)
const tasks = dataRes?.value?.data
</script>
