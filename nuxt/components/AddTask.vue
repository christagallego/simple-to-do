<template>
  <form @submit.prevent="doSubmit" class="shadow sm:rounded-md sm:overflow-hidden p-5">
    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700">Title</label>
      <input type="text" name="title" v-model="title" class="mt-2 focus:ring-violet-500 focus:border-violet-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md p-2">
    </div>

    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700">Description</label>
      <textarea name="description" v-model="description" rows="5" class="mt-2 focus:ring-violet-500 focus:border-violet-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md p-2"></textarea>
    </div>

    <div class="text-right">
      <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    async doSubmit() {
      try {
        await this.$strapi.create('tasks', {
          title: this.title,
          description: this.description,
          completed: false,
        }).then((res) => {
          this.$emit('add-task', res)
          this.title = ''
          this.description = ''
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>