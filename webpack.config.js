//const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {

    watch: true,

    target: 'electron-renderer',

    entry: './app/src/renderer_process.js',

    output: {
        path: __dirname + '/app/build',
        publicPath: 'build/',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude:/node_modules/,
                use: ['babel-loader']
            },
            // {
            //     test: /\.css$/,
            //     loader: ExtractTextPlugin.extract({
            //       loader: 'css-loader',
            //       options: {
            //         modules: true
            //       }
            //     })
            // },
            {
                test: /\.(css|scss)$/,
                use: [  
                  'style-loader',
                  MiniCssExtractPlugin.loader, 
                  'css-loader',
                  'postcss-loader',
                  'sass-loader'
                ]
              },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },

    plugins: [
        // new ExtractTextPlugin({
        //     filename: 'bundle.css',
        //     disable: false,
        //     allChunks: true
        // })
        new MiniCssExtractPlugin({
            filename: "bundle.css"
          })
    ],

    resolve: {
      extensions: ['.js', '.json', '.jsx']
    }

}