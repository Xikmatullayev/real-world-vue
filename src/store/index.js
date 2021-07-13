import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import event from './modules/event'
import notification from './modules/notification'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  modules: {
    user,
    event,
    notification
  }
})
