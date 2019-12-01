import GkButton from './button/index.js';

import GkRow from './row/index'
import GkCol from './col/index'
const components = [
    GkButton,
    GkRow,
    GkCol,
]

const install = function (Vue) {
    if (install.installed) return
    components.map(component => Vue.component(component.name, component))
    // MetaInfo.install(Vue)
    // Vue.prototype.$loading = WLoadingBar
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    GkRow,
    GkCol,
    GkButton
}