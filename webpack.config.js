const path = require('path')
require('dotenv').config()
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require("webpack");

module.exports = {
    entry: "./src/app.js",
    output:{
        filename:'myBundle.js',
        path: path.resolve(__dirname,'dist'),
        publicPath:'',
        // publicPath: path.resolve(__dirname,'public'),
        clean:true
    },
    devServer:{
        port:9000,
        contentBase:path.resolve(__dirname,'dist'),
        hot:true
    },
    plugins:[
        new HTMLWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html',
            inject:'body'
        }),
        new webpack.EnvironmentPlugin([
            'RESUME_DESKTOP',
            'RESUME_MOBILE',
            'PF_CREDIT_CARD',
            'PF_VANSHTNT',
            'PF_PRODUCT_CARD',
        ])
    ],
    module:{
        rules:[
            {
                 test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3|PDF)$/,
                 type: 'asset/resource',                  
            },
            {
                test:/\.scss$/,
                use:["style-loader","css-loader","sass-loader"]
            },
            {
                test:/\.js$/,
                exclude:/(node_modules)/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:["@babel/preset-env","@babel/preset-react"]
                    }
                }
            }
        ]
    },
    mode:process.env.MODE=="production"?"production":"development",
}