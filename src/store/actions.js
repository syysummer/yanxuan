import {
  RECEIVE_CATELIST,
  RECEIVE_BANNER,
  RECEIVE_HOMEDATA,
  RECEIVE_DETAIL
} from './mutation-types'
import {
  reqCateList,
  reqBanner,
  reqHomeData,
  reqDetailData
} from '../api'
export default {
  async getCateList ({commit}) { //获取顶部列表数据
    const result =await reqCateList()
    let cateListData = result.data
    commit(RECEIVE_CATELIST, {cateListData})
  },
  async getBanner ({commit}) { // 获取轮播图数据
    const result =await reqBanner()
    let focusList = result.data
    commit(RECEIVE_BANNER, {focusList})
  },
  async getHomeData ({commit}) { // 获取首页数据
    const result =await reqHomeData()
    let home = result.data
    commit(RECEIVE_HOMEDATA, {home})
  },
  async getDetailData ({commit}) {
    const result =await reqDetailData()
    let detail = result.data
    commit(RECEIVE_DETAIL, {detail})
  }
}
