import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// Go to vue tool, check Vuex (CTRL + 2)
export default new Vuex.Store({
  state: {
    posts: []
  },
  getters: {
    getPostsById: (state) => (id) => {
      return state.posts.find(post => post.id === id)
    }
  },
  mutations: {
    GET_POST(state, payload) {
      this.state.posts = payload
    }
  },
  actions: {
    async getPosts(context){
      try {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const response = await axios.get(url)
        console.log("Actions: getPosts", response)
        // Call Mutation of this action and send data
        // Generally, we are using all capital letters for mutation name
        // Don't forget mutations are sync
        context.commit('GET_POST', response.data)
      } catch (error) {
        console.log("ERROR: Actions: getPosts", error)
      }
    }
  }
})
