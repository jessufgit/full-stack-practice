<template>
    <div><span>{{ this.username }}</span></div>
</template>

<script>
export default {
  head() {
    return {
      title: `User - ${this.username}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'What you need to know about' + this.username
        }
      ]
    }
  },
  computed: {
      username() {
          return this.$route.params.username;
      }
  }
}
</script>
