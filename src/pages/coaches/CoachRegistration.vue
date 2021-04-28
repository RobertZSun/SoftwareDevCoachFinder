<template>
  <base-card>
    <h2>Register As a Coach Now!</h2>
    <coach-form @save-data="saveData"></coach-form>
  </base-card>
</template>


<script>
import CoachForm from '../../components/coaches/CoachForm'
export default {
  components: { CoachForm },
  methods: {
    saveData(data) {
      this.$store.dispatch('coachesRoot/registerCoach', data);
      this.$router.replace('/coaches');
    }
  },
}
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>