const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'build.js'
    },
    module: {
        // avoid webpack trying to shim process
        noParse: /es6-promise\.js$/,
        loaders: [{
                test: /\.vue$/,
                loader: 'vue'
            }, {
                test: /\.js$/,
                // excluding some local linked packages.
                // for normal use cases only node_modules is needed.
                exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
                loader: 'babel'
            },
            //  {
            //     test: /\.(png|jpg)$/, //处理png和jpg的图片
            //     loader: 'url?limit=100000' //限制为100k（如果小于100k会将图片打包进js文件）

            // }
        ]
    },

    babel: {
        presets: ['es2015','stage-0'],
        plugins: ['transform-runtime']
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(), //热加载

        /*new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })*/
        // new webpack.optimize.CommonsChunkPlugin('common.js')
        
    ],
}
