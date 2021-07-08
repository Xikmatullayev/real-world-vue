<template>
  <div>
    <h1>Events Listing</h1>
    <div :class="isLoading ? 'loading' : ''"></div>
    <EventCard v-for="event in event.events" :key="event.id" :event="event" />

    <router-link
      :class="page == 1 ? 'disabled' : ''"
      :to="{ name: 'event-list', query: { page: page - 1 } }"
      rel="prev"
      >Prev Page</router-link
    >
    |
    <router-link
      :class="event.totalEvents > page * 3 ? '' : 'disabled'"
      :to="{ name: 'event-list', query: { page: page + 1 } }"
      rel="next"
      >Next Page</router-link
    >
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import { mapState } from "vuex";
export default {
  components: {
    EventCard,
  },
  computed: {
    ...mapState(["event"]),
    page() {
      // What page we're currently on
      return parseInt(this.$route.query.page) || 1;
    },
    isLoading() {
      if (this.event.events.length === 0) {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    this.$store.dispatch("fetchEvents", {
      perPage: 3,
      page: this.page,
    });
  },
};
</script>

<style scoped>
.loading {
  margin: 10px 0;
  height: 5px;
  background: #39b982;
  animation: loading 1s infinite;
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
  70% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}
.disabled {
  pointer-events: none;
  color: #9fd1ba;
}
</style>