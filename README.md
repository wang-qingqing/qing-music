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

    webpack4 + react + react-router4 + sass + antd + mobx4 + axios

2、每个组件上的特有的样式要写在对应的css文件里，也只在对应的组件上引入，保证css按需加载。

3、路由文件放在**routes**文件夹里面。

4、辅助函数或者工具放在**helper**文件夹里面。

5、状态管理的相关内容放在**store**文件夹里面。

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

  (4)为了支持es7,需要增加三个依赖：(mobx需要)
  
      "babel-plugin-transform-decorators"
      "babel-plugin-transform-decorators-legacy"
      "babel-preset-stage-1"

  并且：(!!!注意)
  
    A. presets的顺序必须是react -> env -> stage-1
    B. plugins的顺序必须是 transform-decorators-legacy   ->  transform-decorators

  (5)参考文档：

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
  
4、mobx4的总结：

  (1)使用ES7的Decorators语法时，VSCode编辑器报错：

      在“文件 -> 首选项 -> 设置”中，搜索“experimentalDecorators”，
      增加一句配置：
      "javascript.implicitProjectConfig.experimentalDecorators": true

  (2)参考文档

    A.官方文档
      https://cn.mobx.js.org/

    B.一篇关于mobx介绍的博客：（推荐先看这个，比较浅显易懂）
      https://qiutc.me/post/efficient-mobx.html

5、关于react的性能优化:

  请看这个：

  >https://github.com/wang-qingqing/accumulate/blob/master/%E6%A1%86%E6%9E%B6%E7%B1%BB/REACT/%E3%80%90React%E3%80%91%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96.md 
  
6、关于axios：
  (1)参考文档：
  >https://ykloveyxk.github.io/2017/02/25/axios%E5%85%A8%E6%94%BB%E7%95%A5/

  (2)基本用法：

    //get请求
      axios.get('/play',{
          id: 123
      })
      .then((response) => {
          console.log(response);
      })
      .catch((err) => {
          console.log(err);
      })


    //post请求
      axios({
          method: 'post',
          url: '/play',
          data: {
              id: 123
          }
      }).then((response) => {
          console.log(response);
      }).catch((err) => {
          console.log(err);
      })


 



