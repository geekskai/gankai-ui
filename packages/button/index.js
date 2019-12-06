import GkButton from './src/button.vue'

GkButton.install = function (Vue){
    Vue.component(GkButton.name,GkButton)
}

export default GkButton;