import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginState: false,
    userInfo: {},
    messages: [],
    likeMessageID: [],
    myMessages: [],
    comments:[]

  },
  mutations: {
    login(state, payload) {
      state.loginState = true
      state.userInfo = payload
    },
    initLikeMessageID(state, payload) {
      state.likeMessageID = payload
    },
    initMessages(state, payload) {
      state.messages = payload
    },
    setMessages(state, payload) {
      state.messages.splice(0, 0, payload)
    },
    // initMyMessage(state, payload) {
    //   state.myMessages = payload
    // },
    // setMyMessage(state, payload) {
    //   state.myMessages.splice(0, 0, payload)
    // }, 
    deleteMessage(state, payload) {
      state.messages.splice(payload, 1)
    },
    // deleteMymessage(state,payload) {
    //   state.myMessages.splice(payload, 1)
    // }
    likeMessage(state, payload) {
      state.messages[payload].likeUserId = 1
    },
    cancelLikeMessage(state, payload) {
      state.messages[payload].likeUserId = null
    },
    setComments(state,payload) {
      state.comments = payload
    }
  },
  actions: {

  }
})
