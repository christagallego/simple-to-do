<template>
  <div :class="[task.completed ? 'completed' : '']">
    <div class="flex justify-between items-start">
      <div class="flex items-start">
        <div class="flex items-center h-5">
          <input
            :id="'task-'+task.id"
            :name="'task-'+task.id"
            type="checkbox"
            class="focus:ring-violet-500 h-5 w-5 text-violet-600 border-gray-300 rounded mt-3"
            :checked="task.completed"
            @change="$emit('change-status', task.id)"
          >
        </div>
        <div class="ml-3">
          <label :for="'task-'+task.id" class="font-medium text-gray-700 text-lg" :class="[task.completed ? 'line-through text-gray-500' : '' ]">{{ task.title }}</label>
          <p class="text-gray-500 text-base">
            {{ task.description }}
          </p>
        </div>
      </div>
      <div>
        <button v-if="task.completed" class="rounded-full text-white bg-red-400 hover:bg-red-500 h-7 w-7 text-sm" title="Delete task" @click="$emit('delete-task', task.id)">
          x
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: [Object],
      default () {
        return {}
      }
    }
  }
}
</script>
