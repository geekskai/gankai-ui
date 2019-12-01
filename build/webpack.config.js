const path = require('path')
const webpack = require('webpack')
const isProd = process.env.NODE_ENV === 'production';
const VueLoaderPlugin = require('vue-loader/lib/plugin');         // vue-loader 编译vue文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //css分离
const HtmlWebpackPlugin = require('html-webpack-plugin');   //构建html文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');  // 清理构建目录下的文件
const MarkdownItContainer = require('markdown-it-container')

const config = require('../config')
const striptags = require('./strip-tags')

const wrapCustomClass = function (render) {
  return function (...args) {
    return render(...args)
      .replace('<code class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">')
  }
}
const convertHtml = function (str) {
  return str.replace(/(&#x)(\w{4});/gi, $0 => String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16)))
}
const assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}


const vueMarkdown = {
  preprocess: (MarkdownIt, source) => {
    MarkdownIt.renderer.rules.table_open = function () {
      return '<table class="table">'
    }
    MarkdownIt.renderer.rules.fence = wrapCustomClass(MarkdownIt.renderer.rules.fence)

    // ```html `` 给这种样式加个class hljs
    //  但是markdown-it 有个bug fence整合attr的时候直接加载class数组上而不是class的值上
    //  markdown-it\lib\renderer.js 71行 这么修改可以修复bug
    //  tmpAttrs[i] += ' ' + options.langPrefix + langName; --> tmpAttrs[i][1] += ' ' + options.langPrefix + langName;
    // const fence = MarkdownIt.renderer.rules.fence 
    // MarkdownIt.renderer.rules.fence = function(...args){
    //   args[0][args[1]].attrJoin('class', 'hljs')
    //   var a = fence(...args)
    //   return a
    // }

    // ```code`` 给这种样式加个class code_inline
    const code_inline = MarkdownIt.renderer.rules.code_inline
    MarkdownIt.renderer.rules.code_inline = function (...args) {
      args[0][args[1]].attrJoin('class', 'code_inline')
      return code_inline(...args)
    }
    return source
  },
  use: [
    [MarkdownItContainer, 'demo', {
      validate: params => params.trim().match(/^demo\s*(.*)$/),
      render: function (tokens, idx) {

        var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);

        if (tokens[idx].nesting === 1) {
          var desc = tokens[idx + 2].content;
          const html = convertHtml(striptags(tokens[idx + 1].content, 'script'))
          // 移除描述，防止被添加到代码块
          tokens[idx + 2].children = [];

          return `<demo-block>
                        <div slot="desc">${html}</div>
                        <div slot="highlight">`;
        }
        return '</div></demo-block>\n';
      }
    }]
  ]
}


const webpackConfig = {
  mode: 'development',
  entry: {
    app: './examples/main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
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
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: [
          path.resolve(__dirname, './examples'),
          path.resolve(__dirname, './test'),
          path.resolve(__dirname, './packages')
        ]
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader'
          }, {
            loader: 'vue-markdown-loader/lib/markdown-compiler',
            options: {
              preset: 'default',
              breaks: true,
              raw: true,
              typographer: true,
              preprocess: function (MarkdownIt, source) {
                MarkdownIt.renderer.rules.table_open = function () {
                  return '<table class="table">'
                }
                MarkdownIt.renderer.rules.fence = wrapCustomClass(MarkdownIt.renderer.rules.fence)

                // ```html `` 给这种样式加个class hljs
                //  但是markdown-it 有个bug fence整合attr的时候直接加载class数组上而不是class的值上
                //  markdown-it\lib\renderer.js 71行 这么修改可以修复bug
                //  tmpAttrs[i] += ' ' + options.langPrefix + langName; --> tmpAttrs[i][1] += ' ' + options.langPrefix + langName;
                // const fence = MarkdownIt.renderer.rules.fence
                // MarkdownIt.renderer.rules.fence = function(...args){
                //   args[0][args[1]].attrJoin('class', 'hljs')
                //   var a = fence(...args)
                //   return a
                // }

                // ```code`` 给这种样式加个class codeInline
                const codeInline = MarkdownIt.renderer.rules.codeInline
                MarkdownIt.renderer.rules.codeInline = function (...args) {
                  args[0][args[1]].attrJoin('class', 'codeInline')
                  return codeInline(...args)
                }
                return source
              },
              use: [
                [MarkdownItContainer, 'demo', {
                  validate: params => params.trim().match(/^demo\s*(.*)$/),
                  render: function (tokens, idx) {
                    if (tokens[idx].nesting === 1) {
                      // const html = tokens[idx + 1].content
                      const html = convertHtml(striptags(tokens[idx + 1].content, 'script'))
                      // 移除描述，防止被添加到代码块
                      tokens[idx + 2].children = []
                      return `<demo-block>
                              <div slot="desc">${html}</div>
                              <div slot="highlight">`
                    }
                    return '</div></demo-block>\n'
                  }
                }]
              ]
            }
          }
        ]
      },
      {
        test: /\.(scss|css)$/,
        use: [
          // MiniCssExtractPlugin.loader,
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          // "style-loader", // 将 JS 字符串生成为 style 节点
          "css-loader", // 将 CSS 转化成 CommonJS 模块,
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer')({
                  overrideBrowserslist: [
                    "Android 4.1",
                    "iOS 7.1",
                    "Chrome > 31",
                    "ff > 31",
                    "ie >= 8"
                  ]
                })

              ]
            }

          },
          {
            loader: 'px2rem-loader',
            options: {
              remUnit: 75,   // 1rem = 75px
              remPrecision: 8   // 小数点精确的位数
            }
          },
          "sass-loader" // 将 Sass 编译成 CSS，默认使用 Node Sass
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('fonts/[name].[hash:7].[ext]')
        }
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
    new VueLoaderPlugin()                 //vue-loader插件开启
  ],
  resolve: {
    //引入路径是不用写对应的后缀名
    extensions: ['.js', '.vue', '.json', '.scss'],
    alias: {
      //正在使用的是vue的运行时版本，而此版本中的编译器时不可用的，我们需要把它切换成运行时 + 编译的版本
      'vue$': 'vue/dist/vue.esm.js',
      //用@直接指引到src目录下
      '@': path.resolve(__dirname, './examples'),
    }
  },
}

if (isProd) {
  webpackConfig.plugins.push(new MiniCssExtractPlugin({
    filename: '[name].[contenthash:7].css'
  }))
}


module.exports = webpackConfig