<template>
</template>

<script>
export default {
  // All data from Strapi should be queried from the asyncData function
  async asyncData ({ $strapi }) {
    const [tasks] = await Promise.all([$strapi.find('tasks')])
    return {
      tasks
    }
  }
}
</script>
