<template>
  <div class="container py-8">
    <div class="flex justify-between mb-8">
      <h1 class="text-3xl font-bold underline text-violet-600">
        To Do
      </h1>
      <button class="bg-violet-600 hover:bg-violet-500 text-white py-2 px-5" @click="showAddForm = !showAddForm">
        Add task
      </button>
    </div>
    <div v-if="showAddForm" class="mb-8">
      <AddTask @add-task="addTask" />
    </div>
    <Tasks :tasks="tasks" @delete-task="deleteTask" @change-status="changeStatus" />
  </div>
</template>

<script>
export default {
  // All data from Strapi should be queried from the asyncData function
  async asyncData ({ $strapi }) {
    const [tasks] = await Promise.all([$strapi.find('tasks')])
    return {
      tasks
    }
  },
  data () {
    return {
      showAddForm: false
    }
  },
  methods: {
    async deleteTask (id) {
      try {
        await this.$strapi.delete('tasks/' + id).then((res) => {
          this.tasks = this.tasks.filter(task => id !== task.id)
        })
      } catch (error) {
        console.log(error)
      }
    },

    async changeStatus (id) {
      const selectedTask = this.tasks.filter(task => id === task.id)
      try {
        await this.$strapi.update('tasks/' + selectedTask[0].id, {
          completed: !selectedTask[0].completed
        }).then((res) => {
          this.tasks = this.tasks.map(task => task.id === id ? { ...res } : task)
        })
      } catch (error) {
        console.log(error)
      }
    },

    async fetchTasks () {
      await this.$strapi.find('tasks').then((res) => {
        this.tasks = res
      })
    },

    addTask (task) {
      this.tasks = [...this.tasks, task]
      this.showAddForm = false
    }
  }
}
</script>
