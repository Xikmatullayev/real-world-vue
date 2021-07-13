export default {
  state: {
    notifications: [],
    nextId: 1
  },
  mutations: {
    PUSH_NOTIFICATION(state, notification) {
      state.notifications.push({
        ...notification,
        id: state.nextId++
      })
    },
    DELETE_NOTIFICATION(state, notificationToRemove) {
      state.notifications = state.notifications.filter(notification => notification.id !== notificationToRemove.id)
    }
  },
  actions: {
    addNotification(context, notification) {
      context.commit("PUSH_NOTIFICATION", notification)
    },
    removeNotification(context, notificationToRemove) {
      context.commit("DELETE_NOTIFICATION", notificationToRemove)
    }
  }
}