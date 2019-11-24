// postcss.config.js
module.exports = {
    plugins: {
        'autoprefixer': {
            overrideBrowserslist: [
                "Android 4.1",
                "iOS 7.1",
                "Chrome > 31",
                "ff > 31",
                "ie >= 8"
            ]
        },
        // 'postcss-pxtorem': {
        //     rootValue: 37.5,
        //     propList: ['*']
        // } //有需要再用
    }
}
