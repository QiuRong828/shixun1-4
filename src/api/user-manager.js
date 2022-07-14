import request from '../utils/request'

// 用户管理列表
const userListApi = (data) => {
  return request({
    url: '/user/list',
    data,
    method: 'GET'
  })
}
// 删除用户
const deleteUser = (data) => {
  return request({
    url: '/user/delete',
    method: 'post',
    data
  })
}

// 新增用户
const addUserApi = (data) => {
  data.avatar = data.avatar ? data.avatar : 'https://joeschmoe.io/api/v1/random'
  return request({
    url: '/user/add',
    method: 'POST',
    data
  })
}
// 更新用户
const updateUserApi = (data) => {
  return request({
    url: '/user/update',
    method: 'PUT',
    data
  })
}

// 查询单个用户
const userInfoIdAPI = (id) => {
  return request({
    url: `/user/userInfo/${id}`,
    method: 'GET'
  })
}

// 分配角色
const roleApi = (id, data) => {
  return request({
    url: `/user/assign/${id}`,
    method: 'POST',
    data
  })
}

const userDelApi = (integer) => {
  return request({
    url: '/sys/user/del',
    method: 'POST',
    data: integer
  })
}

export default {
  userListApi,
  deleteUser,
  addUserApi,
  updateUserApi,
  userInfoIdAPI,
  roleApi,
  userDelApi
}
