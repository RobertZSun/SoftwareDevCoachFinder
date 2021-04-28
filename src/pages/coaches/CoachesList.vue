<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <coach-filter @change-filter="setFilters"></coach-filter>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="loadCoaches(true)">
            Refresh
          </base-button>
          <base-button link to="/auth?redirect=register" v-if="!isLoggedIn">
            To Register as Coach
          </base-button>
          <base-button
            v-if="!isCoach && !isLoading && isLoggedIn"
            to="/register"
            class="falt"
            :link="true"
          >
            Register as Coach
          </base-button>
        </div>
        <div v-if="isLoading"><base-spinner></base-spinner></div>
        <ul v-else-if="hasCoaches">
          <coach-item
            v-for="coach in filterCoaches"
            :key="coach.id"
            :id="coach.id"
            :first-name="coach.firstName"
            :last-name="coach.lastName"
            :hourly-rate="coach.hourlyRate"
            :areas="coach.areas"
          ></coach-item>
        </ul>
        <h3 v-else>No Coaches</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import CoachFilter from '../../components/coaches/CoachFilter';
import CoachItem from '../../components/coaches/CoachItem';

export default {
  components: {
    CoachItem, CoachFilter
  },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
      isLoading: false,
      error: null,
    };
  },
  computed: {
    filterCoaches() {
      const allCoaches = this.$store.getters['coachesRoot/coaches'];
      const filteredCoaches = allCoaches.filter(coach => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        } else if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        } else if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        } else {
          return false;
        }
      });
      return filteredCoaches;
    },
    hasCoaches() {
      return !this.isLoading && this.$store.getters['coachesRoot/hasCoaches'];
    },
    isCoach() {
      return this.$store.getters['coachesRoot/isCoach'];
    },
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    setFilters(range) {
      this.activeFilters = range;
    },
    // async loadCoaches(refresh = false) {
    async loadCoaches(refresh = false) {
      this.isLoading = true;
      try {
        // await this.$store.dispatch('rootCoaches/loadCoaches', { forceRefresh: refresh });
        await this.$store.dispatch('coachesRoot/loadCoaches', { forceRefresh: refresh });
      } catch (error) {
        console.log(error);
        this.error = error.message || 'Sth went wrong!';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    }
  },
  created() {
    this.loadCoaches();
  },
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>