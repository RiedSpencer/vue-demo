# vue-demo
关于vue-webpack的介绍:
vue的demo演示地址：
http://pro.raoye.me

vue-project项目介绍：
1、npm安装搭建
2、主要是两个组件 登录（http://pro.raoye.me/login） 和 首页 http://pro.raoye.me/hello，其余全是子组件和子路由
3、用到了 父子组件，vue-router，vuex

项目搭建流程：
1、直接用node.js的npm进行项目搭建
2、然后进行项目的充实
3、进行发布，将dist的代码扔到后台即可

项目访问流程（提前安装好npm，vue，vuex，vue-router）:
1、直接下载demo1到目录下
2、cd到demo1的目录
3、npm run dev
4、发布就  npm run build

或者：
服务器访问路径到dist目录就可以，其中因为是采用history的vue模式，所以需要进行服务器的配置，可参考网址：https://router.vuejs.org/zh-cn/essentials/history-mode.html

其中有两处用到jsonp进行跨域处理，需要读者自行配置，文件为demo里面的fun.php

项目主要功能点讲解：
1、export default { }
这是属于ES5中的语法，方便进行发布与调用，在这个demo中大量使用到了export，很方便的就可以import
2、组件
父子组件和单个页面的父子组件并没有什么区别，只是可能没有写在同一个文件，子组件分别生成一个vue文件
3、路由
路由用到了vue-router，首先使用前需要npm安装，然后在注册Vue组件的时候也进行调用，可以进行局部的push和replace，也可以进行全局的push和replace，其中路由的模式分为三种，基本上采用h5的history模式（这主要是进行web history api，主要ajax刷新记住历史的）
4、vuex
vuex主要进行状态管理，也就是说明全部都会围绕state，分为三个部分：getters，actions，mutations
a、进行state的初始化
b、进行getters的赋值
c、actions的commit
d、mutaions的状态管理
其实有一张很经典的图片可以进行说明，



虽然在项目里面可能进行了模块划分，但是需要明确的是都是全局参数和函数，也就是说在nav.js里面的state也可以在hello.js里面进行使用

最后直接进行demo进行源码分析最实在

其中写了两个jsonp进行跨域访问，用php写的，文件在demo里面有，名字为  fun.php



