<template>
    <div class="create">
        <h1>Create A New Schedule</h1>
        <br>
        <form @submit.prevent="addSchedule">
          <input v-model="schedule" type="text" placeholder="Schedule Type"/>
          <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      schedule: ""
    }
  },
  head() {
    return {
      title: 'Add Appointment',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'The section used to add an appointment to the calendar.'
        }
      ]
    }
  },
  methods: {
    addSchedule() {
      this.$store.commit('setSchedules', this.schedule)
    }
  }
}
</script>

<style>
.create {
  border: 2px green solid;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
