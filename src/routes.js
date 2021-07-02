function index() {
  return import(/* webpackChunkName: "index" */ '/src/pages/index.vue')
}
function credit() {
  return import(/* webpackChunkName: "credit" */ '/src/pages/credit.vue')
}

export default [
  {
    name: 'index',
    path: '/',
    component: index,
  },
  {
    name: 'credit',
    path: '/credit',
    component: credit,
  },
]
