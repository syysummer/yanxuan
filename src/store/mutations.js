import {
  RECEIVE_CATELIST,
  RECEIVE_BANNER,
  RECEIVE_HOMEDATA,
  RECEIVE_DETAIL
} from './mutation-types'
export default {
  [RECEIVE_CATELIST] (state, {cateListData}) {
    state.cateListData = cateListData
  },
  [RECEIVE_BANNER] (state, {focusList}) {
    state.focusList = focusList
  },
  [RECEIVE_HOMEDATA](state, {home}) {
    state.home = home
  },
  [RECEIVE_DETAIL] (state, {detail}){
    state.detail = detail
  }
}
