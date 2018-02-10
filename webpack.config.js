/**
 * User: siguang
 * Date: 2016/12/28
 * Time: 15:04
 */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const openBrowserWebpackPlugin = require('open-browser-webpack-plugin');

const basePath = __dirname;
const appPath = path.resolve(basePath, 'src');
const buildPath = path.resolve(basePath, 'build');

module.exports = {
    entry: {
        app: path.resolve(appPath, 'main.js')
    },

    output: {
        path: buildPath,
        filename: '[name].min.js',
        chunkFilename: '[name].min.js'
    },

    module: {
        loaders: [

            // 处理require()引入的css文件，并将代码显示到页面的<style>中
            { test: /\.css$/, loader: "style-loader!css-loader" },

            // 将scss文件转成css文件
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},

            // ?limit=8192  limit设置小于8k的图片转成64位编码，大小8于不会被转码
            { test: /\.(png|jpg|woff|eot|ttf|svg|gif)$/, loader: 'url-loader?limit=8192'},

            // ES6 转 ES5
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            }
        ]
    },

    plugins: [

        // html
        new HtmlWebpackPlugin({
            // 改变页面的<title>标签的内容
            title: 'Hello World app',
            // 模版地址
            template: path.resolve(appPath, 'index.html'),
            // 构建后的文件名和目录
            filename: 'index.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks:['app'],
            //要把script插入标签里
            inject:'body'
        }),

        // 热启动
        new webpack.HotModuleReplacementPlugin(),
        // 自动打开浏览器
        new openBrowserWebpackPlugin({ url: 'http://localhost:3001' })
    ],

    // 查找依赖
    resolve:{
        // require或alias时不需要写后缀
        extensions: [".js", ".jsx", ".css", ".json"],
    },

    // webpack-dev-server 配置
    devServer: {
        port: 3001,                 // 端口
        contentBase: 'build',       // 内容目录
        hot: true,		            // 热刷新
        inline: true
    }
}