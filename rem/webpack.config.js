const webpack=require('webpack');
const path = require('path');
module.exports = {
    entry: "./app.js",
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            //.css 文件使用 style-loader 和 css-loader 来处理
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test:/\.scss$/,loader:"style-loader!css-loader!sass-loader"},
            {　test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
        ]
    }
};