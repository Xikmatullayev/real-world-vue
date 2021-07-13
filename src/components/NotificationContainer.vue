<template>
  <div class="notification-container">
    <NotificationBar
      v-for="notification in notification.notifications"
      :key="notification.id"
      :notification="notification"
    ></NotificationBar>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NotificationBar from "./NotificationBar.vue";

export default {
  components: { NotificationBar },
  computed: {
    ...mapState(["notification"]),
  },
};
</script>

<style scoped>
.notification-container {
  position: fixed;
  bottom: 0;
  right: 0;
}
</style>