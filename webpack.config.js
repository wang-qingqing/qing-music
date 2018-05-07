const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const env = process.env.NODE_ENV;

module.exports = {
  devServer:{
    historyApiFallback: true,  //可以查看页面的报错信息,并且所有路径都会执行index.html
    compress: true // 开发服务器是否启动gzip等压缩
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
        }, 
        {
            test: /\.(woff|woff2|eot|ttf)(\?.*$|$)/,
            use: ['url-loader']
        }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html", // 生成的html存放路径，相对于 path
      hash: true // 为静态资源生成hash值
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  watch: env === 'development',
  watchOptions: {
    ignored: /node_modules/, // 忽略不用监听变更的目录
    aggregateTimeout: 500, // 防止重复保存频繁重新编译,500毫秒内重复保存不打包
    poll: 1000 // 每秒询问的文件变更的次数
  }
};

if (env === 'production') {
    module.exports.optimization = {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          uglifyOptions: {
            compress: true,
            ecma: 6,
            mangle: true
          },
          sourceMap: true
        })
      ]
    };
}
  
