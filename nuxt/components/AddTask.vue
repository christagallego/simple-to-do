<template>
  <form @submit.prevent="doSubmit">
    <label>Title</label>
    <input type="text" name="title" v-model="title">

    <label>Description</label>
    <textarea name="description" v-model="description"></textarea>

    <button type="submit">Submit</button>
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