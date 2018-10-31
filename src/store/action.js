
export default {
	ceshi1(){
		console.log('1');
	},
	ceshi2: ()=>{
		console.log('2');
	},
  error({commit}, tips) {
    commit('alertTips', tips)
  },
  inquiry({commit,dispatch}, msg) {
		dispatch('ceshi2');
    commit('inquiry', msg)
  }

}
