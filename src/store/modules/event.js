import EventService from "../../services/EventService";

export default {
  state: {
    events: [],
    totalEvents: 0,
    event: {}
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    SET_EVENTS(state, events) {
      state.events = events
    },
    SET_TOTAL_EVENTS(state, totalEvents) {
      state.totalEvents = totalEvents
    },
    SET_EVENT(state, event) {
      state.event = event
    }
  },
  actions: {
    createEvent(context, event) {
      return EventService.postEvent(event)
        .then(() => {
          context.commit("ADD_EVENT", event);
          const notification = {
            type: "success",
            message: "Your event has been created!"
          }
          context.dispatch("addNotification", notification);
        })
    },
    fetchEvents(context, { perPage, page }) {
      EventService.getEvents(perPage, page)
        .then((response) => {
          context.commit("SET_EVENTS", response.data);
          context.commit("SET_TOTAL_EVENTS", response.headers['x-total-count']);
        })
        .catch((error) => {
          const notification = {
            type: "error",
            message: "There was a problem fetching events: " + error.message
          }
          context.dispatch("addNotification", notification);
        })
    },
    fetchEvent(context, id) {
      let event = context.getters.getEventById(id);

      if (event) {
        context.commit("SET_EVENT", event)
      } else {
        EventService.getEvent(id)
          .then((response) => {
            context.commit("SET_EVENT", response.data);
          })
          .catch((error) => {
            const notification = {
              type: "error",
              message: "There was a problem fetching an event: " + error.message
            }
            context.dispatch("addNotification", notification);
          });
      }
    }
  },
  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id === id);
    }
  }
}