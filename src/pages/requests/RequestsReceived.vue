<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <base-card>
        <header>
          <h2>Requests Received</h2>
        </header>
        <base-spinner v-if="isLoading"></base-spinner>
        <ul v-else-if="hasRequests">
          <request-item
            v-for="req in receivedRequests"
            :key="req.id"
            :email="req.email"
            :message="req.message"
          ></request-item>
        </ul>
        <h3 v-else>You haven't received any resquests yet！</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem'

export default {
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  components: {
    RequestItem
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['requestsRoot/requests'];
    },
    hasRequests() {
      return !this.isLoading && this.$store.getters['requestsRoot/hasRequests'];
    }
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requestsRoot/fetchRequests');
      } catch (error) {
        this.error = error || 'Something failed to fetch';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    }
  },
  created() {
    this.loadRequests();
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