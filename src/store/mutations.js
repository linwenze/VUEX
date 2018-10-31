// import {setStore, getStore} from '../config/mUtils'

export default {
	alertTips(state, tips) {
		state.tipShow = true;
		state.tips = tips;
	},
  inquiry(state, msg) {
    state.diastatus = true;
    console.log(state)
    state.msg = msg;
  },
  closeTips(state){
    state.tipShow = false;
  },
	closeDia(state){
		state.diastatus = false;
	},
  toggleLoading(state,flag){
    state.loadingShow = flag; 
  },
  updateBarImgSrc(state,src){
    state.barImgSrc = src;
  },
  openLoading(state) {
		state.loadingShow = true;
	},
  closeLoading(state) {
		state.loadingShow = false;
	}
}
