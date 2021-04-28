<template>
  <div>
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>${{ hourlyRate }}/hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <base-button link :to="contactLink">Contact</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge
          v-for="area in selectedCoach.areas"
          :key="area"
          :type="area"
          :area="area"
        ></base-badge>
        <p>{{ description }}</p>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + " " + this.selectedCoach.lastName;
    },
    contactLink() {
      return this.$route.path + '/contact';
    },
    hourlyRate() {
      return this.selectedCoach.hourlyRate;
    },
    description() {
      return this.selectedCoach.description;
    }
  },
  created() {
    this.selectedCoach = this.$store.getters['coachesRoot/coaches'].find(coach => coach.id === this.id);
  },
}
</script>
