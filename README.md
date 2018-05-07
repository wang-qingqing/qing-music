# qing-music
音乐播放器

### 一、概述

  （开发中，待补充）

### 二、如何使用

    1、git clone  https://github.com/wang-qingqing/qing-music.git
    
    2、yarn install
        
    3、运行
    （1）开发环境：
      执行 yarn run start，该项目将在 http://localhost:8080/ 中运行。
      
    （2）生产环境：
      yarn run build


### 三、说明

1、技术栈:

    webpack4 + react + react-router + sass + antd 

2、每个组件上的特有的样式要写在对应的css文件里，也只在对应的组件上引入，保证css按需加载。

3、路由文件放在routes文件夹里面。


### 四、总结
1、webpack4的相关总结：

  (1)默认是以'./src/index.js'作为入口文件的。

  (2)output.publicPath 
    表示资源的发布地址，当配置过该属性后，打包文件中所有通过相对路径引用的资源都会被配置的路径所替换。
    可设置为 publicPath: '/'

  (3)通过：

    devServer:{
      historyApiFallback: true  //可以查看页面的报错信息,并且所有路径都会执行index.html
    },

  解决路由跳转的问题。

  (4)参考文档：

    A. webpack踩坑之路 (2)——图片的路径与打包 ：
       https://www.cnblogs.com/ghost-xyx/p/5812902.html


2、sass的相关总结：

  (1)使用文档参考https://www.sass.hk/。
 
3、安装依赖的总结：

  (1)yarn install时，如果出现

    “ There appears to be trouble with your network connection. Retrying...”
  的消息，解决方法如下：

      把yarn.lock删除了再执行yarn install就行了。
      因为yarn.lock会记录所有依赖包的版本号。

  (2)安装node-sass的时候，可能会出现：

    "Error: `sass-loader` requires `node-sass` >=4 but node-sass is already at v4 "

  的情况，可能是数据源的问题。

    我重试了几次yarn add node-sass，竟然就可以了。
    （凌晨一点多试了好几回都报错，中午十二点竟然就好了，不太清楚是什么原因，
    可能是我中午执行这条命令的时候，忘了开Shadowsocks代理服务器了，数据源不一样吧。）
  





