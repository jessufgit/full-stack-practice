<template>
  <div class="home">
    <h1>Schedules</h1>
    <hr>
    <div class="schedule-container">
      <div class="schedule" v-for="schedule in schedules" :key="schedule.id">
        <div >Schedule Type #{{ schedule.id }} - {{ schedule.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  head() {
    return {
      title: 'My Schedule',
    }
  },
  data() {
    return {
      schedules: []
    }
  },
  created() {
    this.$store.dispatch('fetchData');
  }
}
</script>

<style>
.home {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.home, .schedule-container {
  display: flex;
  flex-direction: column;

  width: 100%;
}
.schedule {

}
</style>
