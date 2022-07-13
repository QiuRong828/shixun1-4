import Layout from '../../layout'
export default {
  path: '/System',
  name: 'sys:role:list',
  meta: {
    icon: 's-grid',
    title: '系统管理'
  },
  component: Layout,
  children: [
    {
      path: '/sys/roles',
      name: 'role',
      component: () => import('../../views/roles'),
      meta: {
        title: '角色管理',
        icon: 'user-solid'
      }
    }
  ]
}
