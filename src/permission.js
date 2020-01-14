import router from './router'

const routerPermission = ['401', 'index', 'travel', 'food', 'detail', 'pay', 'fruits']

router.beforeEach((to, from, next) => { 
    console.log(to)
    if(routerPermission.includes(to.name)) {
        next()
    } else {
        next({ path: '/401', replace: true})
    }
})