<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-btn class="mx-1" text to="/"> Home </v-btn>

      <v-btn class="mx-1" text to="/about"> About </v-btn>

      <v-spacer></v-spacer>

      <v-btn text @click="loading"> Loading </v-btn>

      <v-btn text @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        Toggle Theme
      </v-btn>
    </v-app-bar>

    <div :class="isLoading ? 'loading' : ''"></div>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    loading() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 4000);
    },
  },
};
</script>

<style scoped>
.loading {
  margin-top: 56px;
  height: 20px;
  background-color: #2196F3;
  animation: loading 2s infinite;
}

@keyframes loading {
  0% {
    width: 0;
  }
  10% {
    width: 10%;
  }
  20% {
    width: 20%;
  }
  40% {
    width: 40%;
  }

  60% {
    width: 70%;
  }

  100% {
    width: 100%;
  }
}
</style>