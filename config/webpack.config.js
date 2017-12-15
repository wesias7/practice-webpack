const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry : {
        'app' : './src/app.js'
    },
    devtool: 'inline-source-map', // 에러를 확인 하기 좋다.
    devServer : { // webpack-dev-server --open 명령어에 대응하는 설정
        contentBase : './dist',
        compress: true,
        port : 9090
    },
    plugins : [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title : 'Output Manager'
        })
    ],
    output : {
        filename : '[name].js',
        path : path.resolve(__dirname, '..', 'dist')
    },
    node : {
        __filename : true,
        __dirname : true
    }
};