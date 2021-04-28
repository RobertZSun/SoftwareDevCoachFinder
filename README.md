# Coach Finder

---

## 目录

1. 项目简介
2. 项目使用效果图
3. 安装说明
4. 关于作者

## 1. 项目简介

此项目是为了给软件从业教学人员及想学习互联网技术的人提供沟通而搭建的一个平台。此项目一共有 6 个模块，分别为：

1. 供用户登录和注册此网站
2. 登记注册为技术培训讲师
3. 注册为讲师后，可查看收到的有意向的学员的联系方式和留言信息
4. 任何访问网站的人可向每一个教练发送联系请求
5. 筛选想要学习领域的培训讲师
6. 查看每个讲师的个人详细介绍个人履历

此项目为技术培训人员和想学习技术的人提供了一对一培训直接沟通的机会，搭建了平台。

## 2. 效果图

![image](https://img-blog.csdnimg.cn/20210428125352408.gif)
![image](https://img-blog.csdnimg.cn/20210428125351825.gif)

## 3. 安装说明

### 环境依赖

node v14.0.0+

### 部署安装

1. 创建属于你自己的 Firebase Project： check => https://console.firebase.google.com/
   ![image](https://img-blog.csdnimg.cn/20210428211607145.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjY1NTcxNw==,size_16,color_FFFFFF,t_70)
2. 创建完 Project 之后，创建属于你自己的 Realtime Database， 并获取到你 database 的 api 链接， 复制到记事本，以备稍后使用
   ![image](https://img-blog.csdnimg.cn/20210428211553275.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjY1NTcxNw==,size_16,color_FFFFFF,t_70)
3. 启用邮箱验证登录功能
   ![image](https://img-blog.csdnimg.cn/20210428211703131.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjY1NTcxNw==,size_16,color_FFFFFF,t_70)

4. 点击项目概览小齿轮下的项目设置，以获取登录验证 api 密钥，复制到记事本，以备稍后使用
   ![image](https://img-blog.csdnimg.cn/20210428212050495.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjY1NTcxNw==,size_16,color_FFFFFF,t_70)

plus： 查看 [Firebase Auth REST Api](https://firebase.google.com/docs/reference/rest/auth?authuser=0#section-create-email-password). 对应的用户注册和登记 api 链接
![image](https://img-blog.csdnimg.cn/20210428213455260.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjY1NTcxNw==,size_16,color_FFFFFF,t_70)

5.替换 auth 模块中的 actions 文件中 API_KEY 为 4 中复制好的 api key

secondTimePrac
└─ src
└─ store
└─ modules
├─ auth
└─ actions.js \*

6. 替换 coaches 和 requests 文件中 projectURL 为 4 中 复制好的数据库 api 链接
   secondTimePractice
   └─ src
   └─ store
   ├─ index.js
   └─ modules
   ├─ auth
   ├─ coaches
   │ ├─ actions.js _
   └─ requests
   ├─ actions.js _

7. npm install //安装 node 运行环境
8. npm run serve // 在开发模式下启动项目
9. npm run build // 构建生产环境文件

## 4. 关于作者

Robert Sun

Email: robertsunzhe@hotmail.com

Tel: 18911604329
