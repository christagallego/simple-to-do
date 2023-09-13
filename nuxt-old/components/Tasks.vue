<template>
  <ul>
    <li v-for="task in tasks" :key="task.id" class="mb-4">
      <Task :task="task" @delete-task="deleteTask" @change-status="changeStatus" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    tasks: {
      type: [Array],
      default () {
        return []
      }
    }
  },

  methods: {
    deleteTask (id) {
      this.$emit('delete-task', id)
    },
    changeStatus (id) {
      this.$emit('change-status', id)
    }
  }
}
</script>
