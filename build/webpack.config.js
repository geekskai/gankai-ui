const path = require('path')
const webpack = require('webpack')
// const devMode = process.env.NODE_ENV !== 'production'
const VueLoaderPlugin = require('vue-loader/lib/plugin');         // vue-loader 编译vue文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //css分离
const HtmlWebpackPlugin = require('html-webpack-plugin');   //构建html文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');  // 清理构建目录下的文件

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, '../'),
    entry: {
        app: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index.js'
    },
    devtool: 'inline-source-map',   //生曾map 映射对应代码  方便错误查询
    devServer: {
        contentBase: './dist',    // 告诉服务从哪提供代码内容(静态文件这么使用)
        hot: true,    //hot模式开启
        port: 9000,
        overlay: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: [ // 注意 解析顺序是从右往左的，先解析css-loader 后解析style-loader将css插入dom中。
            //         MiniCssExtractPlugin.loader,
            //         'css-loader'
            //     ]
            // },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // "style-loader", // 将 JS 字符串生成为 style 节点
                    "css-loader", // 将 CSS 转化成 CommonJS 模块,
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: { path: path.resolve(__dirname, '../postcss.config.js') }
                        },
                    },
                    "sass-loader" // 将 Sass 编译成 CSS，默认使用 Node Sass
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'         //vue-loader 编译vue模块
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),  //热模块替换开启,生产环境要关闭！！
        new HtmlWebpackPlugin({
            filename: 'index.html',      //指定打包生成的文件名
            title: 'gankai',            //title
            template: './index.html',       //指定一个html文件为模板
        }),
        new MiniCssExtractPlugin({
            filename: '[name]_[contenthash:8].css'
        }),
        new VueLoaderPlugin()                 //vue-loader插件开启
    ],
    resolve: {
        //引入路径是不用写对应的后缀名
        extensions: ['.js', '.vue', '.json'],
        alias: {
            //正在使用的是vue的运行时版本，而此版本中的编译器时不可用的，我们需要把它切换成运行时 + 编译的版本
            'vue$': 'vue/dist/vue.esm.js',
            //用@直接指引到src目录下
            '@': path.resolve(__dirname, '../src'),
        }
    },

}