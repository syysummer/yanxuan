import {
  RECEIVE_CATELIST,
  RECEIVE_BANNER,
  RECEIVE_HOMEDATA,
  RECEIVE_DETAIL,
  RECEIVE_NAVDATA,
  RECEIVE_UPDATEPATH
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
  },
  [RECEIVE_NAVDATA] (state, {navData}) {
    state.navData = navData
  },
  [RECEIVE_UPDATEPATH] (state, {loginPath}) {
    state.loginPath = loginPath
  }
}
