<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ hourlyRate }}/hour</h4>
    <div>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :area="area"
      ></base-badge>
    </div>
    <div class="actions">
      <!-- <base-button link :to="coachContactLink" mode="outline">
        Contact
      </base-button>
      <base-button link :to="coachDetailLink">View Detail</base-button> -->
      <base-button mode="outline" link :to="coachContactLink"
        >Contact</base-button
      >
      <base-button link :to="coachDetailLink">View Detail</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'areas', 'hourlyRate'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    coachContactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    },
    coachDetailLink() {
      //   return '/coaches/' + this.id;
      return this.$route.path + '/' + this.id;
    }
  },
  // methods: {
  //   printPath() {
  //     console.log(this.$route);
  //   }
  // },
  // created() {
  //   this.printPath();
  // },
}
</script>


<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>