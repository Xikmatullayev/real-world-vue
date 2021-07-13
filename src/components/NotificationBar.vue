<template>
  <div class="notification-bar" :class="notificationTypeClass">
    <p>{{ notification.message }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      timeout: null
    }
  },
  methods: {
    ...mapActions(["removeNotification"]),
  },
  mounted() {
    this.timeout = setTimeout(() => {
      this.removeNotification(this.notification);
    }, 5000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout)
  },
  computed: {
    notificationTypeClass() {
      return this.notification.type;
    },
  },
};
</script>

<style scoped>
.notification-bar {
  margin: 1rem;
}
.error {
  color: red;
}
.success {
  color: green;
}
</style>