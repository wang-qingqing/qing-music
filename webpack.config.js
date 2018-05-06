const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devServer:{
    historyApiFallback: true  //可以查看页面的报错信息,并且所有路径都会执行index.html
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options:{
                    presets: [
                        'react',
                        ["env", {
                            "targets": {
                                "browsers": ["last 2 versions", "safari >= 7", "iOS >= 8"]
                            }
                        }]                   
                    ],
                    "plugins": [
                        "transform-runtime"
                    ]
                }
            }
        },
        {
            test: /\.html$/,
            use: [
            {
                loader: "html-loader",
                options: { 
                    minimize: true                   
                }
            }
            ]
        },
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
        },
        {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        },
        {
            test: /\.(jpe?g|png|gif)$/,
            loader: 'url-loader',
            options: {
                name: '[path][name].[ext]'
            }
        }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};