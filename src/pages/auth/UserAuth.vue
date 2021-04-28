<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" title="Authenticating..." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">E-Mail</label>
          <input
            type="email"
            id="email"
            autocomplete="username"
            v-model.trim="email"
          />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            autocomplete="current-password"
            v-model.trim="password"
          />
        </div>
        <p v-if="formIsNotValid">
          Please enter a valid email and password (must be at least 6 characters
          long).
        </p>
        <base-button>{{ submitButtonCaption }}</base-button>
        <base-button mode="flat" @click="switchAuthMode">{{
          switchModeButtonCaption
        }}</base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsNotValid: false,
      mode: 'login',
      isLoading: false,
      error: null
    };
  },
  computed: {
    submitButtonCaption() {
      return this.mode === 'login' ? 'Login' : 'Signup';
    },
    switchModeButtonCaption() {
      return this.mode === 'login' ? 'Go to Signup' : 'Go to Login';
    }
  },
  methods: {
    async submitForm() {
      this.formIsValid = false;
      if (this.email === '' || !this.email.includes('@') || this.password.length < 6) {
        this.formIsValid = true;
        return;
      }
      this.isLoading = true;
      const payload = { email: this.email, password: this.password };
      try {
        if (this.mode === 'login') {
          await this.$store.dispatch('login', payload);
        } else if (this.mode === 'signup') {
          console.log("sign up now");
          await this.$store.dispatch('signup', payload);
        }

        const redirectUrl = '/' + (this.$route.query.redirect || 'coaches');
        this.$router.replace(redirectUrl);
      } catch (error) {
        this.error = error.message || "Please try again";
      }
      this.isLoading = false;

    },
    switchAuthMode() {
      this.mode = this.mode === 'login' ? 'signup' : 'login';
    },
    handleError() {
      this.error = null;
    }
  },

}
</script>

<style scoped>
form {
  margin: 1rem;
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
</style>