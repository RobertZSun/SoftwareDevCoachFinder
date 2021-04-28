<template>
  <div>
    <h1>please leave your contact</h1>
    <div
      class="form-control"
      @submit="submitForm"
      :class="{ errors: !formIsValid }"
    >
      <label for="email">Your E-Mail Address</label>
      <input type="email" name="email" id="email" v-model.trim="email" />
    </div>
    <div class="form-control" :class="{ errors: !formIsValid }">
      <label for="message">Message</label>
      <textarea
        type="text"
        name="message"
        id="message"
        rows="5"
        v-model.trim="message"
      />
    </div>
    <p class="errors" v-if="!formIsValid">
      Please make sure the email is valid and message is not empty.
    </p>
    <div class="actions">
      <base-button @click="submitForm">Send Message</base-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      message: '',
      formIsValid: true
    };
  },
  methods: {
    validForm() {
      if (this.email === '' || !this.email.includes('@') || this.message === '') {
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.formIsValid = true;
      this.validForm();
      if (!this.formIsValid) {
        return;
      }
      // console.log(this.$route);
      // console.log(this.$route.params);
      const formData = {
        email: this.email,
        message: this.message,
        coachId: this.$route.params.id,
      };
      this.$store.dispatch('requestsRoot/contactCoach', formData);
      this.$router.replace('/coaches');
    }
  },
}
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>