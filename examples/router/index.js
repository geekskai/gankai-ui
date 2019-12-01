import Vue from 'vue'
import Router from 'vue-router'

import navConfig from '../nav.config.json'

Vue.use(Router)

let routes = []

Object.keys(navConfig).forEach((key) => {
  
    routes = routes.concat(navConfig[key])
})

let addComponent = (routers) => {
    routers.forEach(router => {
        if (router.items) {
            addComponent(router.items)
          
            routes = routes.concat(router.items)
        } else {
            router.type === 'pages' ?
                (router.component = r => require.ensure([], () =>
                    r(require(`../pages/${router.name}.vue`)))) :
                (router.component = r => require.ensure([], () =>
                    r(require(`../docs/${router.name}.md`))))
        }
    })
}

addComponent(routes)


export default new Router({
    routes: routes
    // routes: [{
    //     path: '/button',
    //     name: 'button',
    //     component: r => require.ensure([], () => r(require('../docs/button.md')))
    // }]
})
