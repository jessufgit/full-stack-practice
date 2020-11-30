<template>
    <div>This appt: <span>{{ id }}</span></div>
</template>

<script>
export default {
  head() {
    return {
      title: `Appt #${this.id}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'What you need to know about appt #' + this.id
        }
      ]
    }
  },
  computed: {
      id() {
          return this.$route.params.id;
      }
  }
}
</script>
