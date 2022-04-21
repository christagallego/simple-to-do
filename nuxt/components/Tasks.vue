<template>
  <ul>
    <li v-for="task in tasks" :key="task.id" class="mb-4">
      <Task @delete-task="deleteTask" @change-status="changeStatus" :task="task" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    tasks: Array
  },

  methods: {
    deleteTask(id) {
      this.$emit('delete-task', id)
    },
    changeStatus(id) {
      this.$emit('change-status', id)
    }
  }
}
</script>