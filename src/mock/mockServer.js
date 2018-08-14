import Mock from 'mockjs'
import data from './data.json'
import data_nav from './data_nav.json' //分类列表的数据
import home_data from './home_data.json' //主页的数据
import shiwu_data from './shiwu_data.json'

// 返回头部导航部分cateList的接口
Mock.mock('/data', {code:0, data: data})

// 返回分类页面的数据
Mock.mock( '/data_nav', {code: 0, data: data_nav.categoryL1List})

//返回首页轮播图片的数据接口
Mock.mock('/banner', {code:0, data: home_data.focusList})

//返回首页的的数据接口
Mock.mock('/home_data', {code:0, data: home_data})

//返回detail页面的轮播图
Mock.mock('/detail', {code:0, data: shiwu_data})

