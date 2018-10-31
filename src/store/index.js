import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'
Vue.use(Vuex)
const state = {
  loadingShow: false,
	tipShow: false,
	tips: '恭喜你中了500W',
  loadingShow: false,
  diastatus:false,
  msg:''
}
export default new Vuex.Store({ 
	state,
	getters,
	actions,
	mutations,
})
