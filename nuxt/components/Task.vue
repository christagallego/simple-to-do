<template>
  <div :class="[task.completed ? 'completed' : '']" @dblclick="$emit('change-status', task.id)">
    <h3>{{ task.title }} {{ task.completed }}</h3>
    <p>{{ task.description }}</p>

    <button @click="$emit('delete-task', task.id)">x</button>
  </div>
</template>

<script>
export default {
  props: {
    task: Object
  }
}
</script>