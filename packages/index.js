import GkButton from './button/index.js';

import GkRow from './row/index'
import GkCol from './col/index'

import GkTag from './tag/index'

import GkShowMore from './show-more/index'
import GkLimitTextArea from './limit-textarea/index'
import MetaInfo from './meta-info/index'
import GkAlert from './alert/index'
import GkLoadingBar from './loading-bar/index'
import Skeleton from './skeleton/index'





const components = [
    GkButton,
    GkRow,
    GkCol,
    GkTag,
    GkShowMore,
    GkLimitTextArea,
    MetaInfo,
    GkAlert,
    Skeleton
]

const install = function (Vue) {
    if (install.installed) return
    components.map(component => Vue.component(component.name, component))
    MetaInfo.install(Vue)
    Vue.prototype.$loading = GkLoadingBar
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    GkRow,
    GkCol,
    GkButton,
    GkTag,
    GkShowMore,
    GkLimitTextArea,
    MetaInfo,
    GkAlert,
    // GkLoadingBar,
    Skeleton
}