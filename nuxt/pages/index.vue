<template>
  <div>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <div class="teses fsfe fs efsef">test</div>
    <Tasks @delete-task="deleteTask" @change-status="changeStatus" :tasks="tasks" />
    {{ tasks }}
  </div>
</template>

<script>
export default {
  // All data from Strapi should be queried from the asyncData function
  async asyncData({ $strapi }) {
    const [tasks] = await Promise.all([$strapi.find('tasks')])
    return {
      tasks
    }
  },

  methods: {
    async deleteTask(id) {
      try {
        await this.$strapi.delete('tasks/'+id).then((res) => {
          this.tasks = this.tasks.filter((task) => id != task.id)
        })
      } catch (error) {
        console.log(error)
      }
    },

    async changeStatus(id) {
      let selectedTask = this.tasks.filter((task) => id == task.id)
      try {
        await this.$strapi.update('tasks/'+selectedTask[0].id, {
          completed: !selectedTask[0].completed
        }).then((res) => {
          this.tasks = this.tasks.map((task) => task.id == id ? {...res} : task)
        })
      } catch (error) {
        console.log(error)
      }
    },

    async fetchTasks() {
      await this.$strapi.find('tasks').then((res) => {
        this.tasks = res
      })
    }
  }
}
</script>
