<template>
  <div>
    <h1>Events Listing</h1>
    <div :class="isLoading ? 'loading' : ''"></div>
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>

<script>
import EventService from '@/services/EventService.js'
import EventCard from '@/components/EventCard.vue'
export default {
  components: {
    EventCard,
  },
  data() {
    return {
      events: []
    }
  },
  computed: {
    isLoading() {
      if(this.events.length === 0) {
        return true
      } else {
        return false
      }
    }
  },
  created () {
    EventService.getEvents()
    .then((response) => {
      this.events = response.data
    })
    .catch((error) => {
      console.log('There was an error:' + error)
    })
  },
}
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
</style>