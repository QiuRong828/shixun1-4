import Layout from '../../layout'
export default {
  path: '/System',
  name: 'sys:menu:list',
  meta: {
    icon: 's-grid',
    title: '系统管理'
  },
  component: Layout,
  children: [
    {
      path: '/sys/menus',
      name: 'menu',
      component: () => import('../../views/menu'),
      meta: {
        title: '菜单管理',
        icon: 'menu'
      }
    }
  ]
}
