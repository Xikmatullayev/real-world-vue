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
    events: []
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    }
  },
  actions: {
    createEvent(context, event) {
    return EventService.postEvent(event).then(() => {
        context.commit("ADD_EVENT", event);
      })
    }
  },
  getters: {
  },
  modules: {
  }
})
