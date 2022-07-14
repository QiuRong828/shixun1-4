import request from '../utils/request'

// 获取菜单列表
const menuListApi = (data) => {
  return request({
    url: '/menu/list',
    method: 'GET',
    data
  })
}

// 添加菜单
const menuAddAPI = (data) => {
  return request({
    url: '/menu/add',
    method: 'POST',
    data
  })
}

// 修改菜单
const menuUpdateAPI = (data) => {
  return request({
    url: '/menu/update',
    method: 'PUT',
    data
  })
}

export default { menuListApi, menuAddAPI, menuUpdateAPI }
