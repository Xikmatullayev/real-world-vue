import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '../services/EventService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      id: "qwe789",
      name: "Lazizbek Xikmatullayev"
    },
    attendees: [
      {
        id: "abc123",
        name: "Adam Jahr"
      },
      {
        id: "def456",
        name: "Gregg Pollack"
      },
      {
        id: "ghi789",
        name: "Lazizbek Xikmatullayev"
      }
    ],
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
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
      return EventService.postEvent(event).then(() => {
        context.commit("ADD_EVENT", event);
      })
    },
    fetchEvents({ commit }, { perPage, page }) {
      EventService.getEvents(perPage, page)
        .then((response) => {
          commit("SET_EVENTS", response.data);
          commit("SET_TOTAL_EVENTS", response.headers['x-total-count']);
        })
        .catch((error) => {
          console.log("There was an error:" + error.response);
        })
    },
    fetchEvent({ commit, getters }, id) {
      let event = getters.getEventById(id);

      if (event) {
        commit("SET_EVENT", event)
      } else {
        EventService.getEvent(id)
          .then((response) => {
            commit("SET_EVENT", response.data);
          })
          .catch((error) => {
            console.log("There was an error:" + error);
          });
      }
    }
  },
  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id === id);
    }
  },
  modules: {
  }
})
