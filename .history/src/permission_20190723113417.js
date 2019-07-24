import router from 'vue-router'

const routerPermission = ['index', 'travel', 'food', 'detail']

router.beforeEach((to, from, next) => { 
    console.log(to)
    if(routerPermission.includes(to.name)) {
        next()
    } else {
        // next({ path: '/401', replace: true})
    }
})