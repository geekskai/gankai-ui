import RadioGroup from './src/index.vue'

RadioGroup.install = function (vue) {
    Vue.component(RadioGroup.name, RadioGroup)
}

export default RadioGroup