---
title: 04-mongodb
date: 2023-08-19 16:55:45
permalink: /pages/cf9857/
categories:
  - 工程化
tags:
  - 
---
# 04-mongodb

# mongoDB

> mongoDB是一个数据库软件

## 什么是数据库软件

> 数据库软件一般简称数据库

数据库（DataBase）是按照数据结构来组织、存储和管理数据的仓库。

![https://www.notion.so./assets/db.jpg](Untitled+5ca9af65b3a045acadf728906047a0e2/https:/www.notion.so./assets/db.jpg)

db

## 为什么要使用数据库软件

我们的程序都是在内存中运行的，一旦程序运行结束或者计算机断电，程序运行中的数据都会丢失。所以我们就需要将一些程序运行的数据持久化到硬盘之中，以确保数据的安全性。而数据库就是数据持久化的最佳选择。说白了，数据库就是存储数据的仓库。

## 数据库软件的分类

### 关系型数据库（RDBS）

构成: 一个关系型数据库软件中有多个数据库,每个数据库中有多个表,每一个表中有多个字段和数据行

代表有：MySQL、Oracle、DB2、SQL Server…

特点: 数据存储在`表`中, 表和表之间可以建立关系

![https://www.notion.so./assets/rdbs.png](Untitled+5ca9af65b3a045acadf728906047a0e2/https:/www.notion.so./assets/rdbs.png)

img

优点：

1、易于维护：都是使用表结构，格式一致；

2、使用方便：1通用，可用于复杂查询；

3、高级查询：可用于一个表以及多个表之间非常复杂的查询。

缺点：

1、读写性能比较差，尤其是海量数据的高效率读写；

2、有固定的表结构，字段不可随意更改，灵活度稍欠；

3、高并发读写需求，传统关系型数据库来说，硬盘I/O是一个很大的瓶颈。

关系型数据库的

### 非关系型数据库（NoSQL）

构成: 一个非关系型数据库软件中有多个数据库,每个数据库中有多个集合,每个集合中有多个文档

代表有：MongoDB、Redis…

特点：数据存储在`集合`中,集合之间无法建立关系

![https://www.notion.so./assets/nosql.png](Untitled+5ca9af65b3a045acadf728906047a0e2/https:/www.notion.so./assets/nosql.png)

img

优点：

1、格式灵活：存储数据的格式可以是key,value形式。

2、速度快：nosql可以内存作为载体，而关系型数据库只能使用硬盘；

3、易用：nosql数据库部署简单。

缺点：

1、不支持sql，学习和使用成本较高；

2、不支持事务；

3、复杂查询时语句过于繁琐。

## mongoDB介绍

MongoDB是为快速开发互联网Web应用而设计的数据库系统。

MongoDB的设计目标是极简、灵活、作为Web应用栈的一部分。

### 数据库（database）

数据库是一个仓库，在仓库中可以存放集合。

### 集合（collection）

集合类似于JS中的数组，在集合中可以存放文档。

### 文档（document）

一个文档相当于就是一条数据, 类似于js中的json对象

![https://www.notion.so./assets/mongdb.png](Untitled+5ca9af65b3a045acadf728906047a0e2/https:/www.notion.so./assets/mongdb.png)

mongodb

## 使用指令操作mongoDB(了解)

1. 找到mongoDB的安装路径

    ```Plain Text
    C:\Program Files\MongoDB\Server\4.2\bin  // 这是默认路径
    ```

1. 双击`mongo.exe`, 这时弹出一个新的命令窗口,在窗口中输入指令即可操作mongoDB

2. 操作mongoDB的基本指令:

    |指令|描述|
|-|-|
|show dbs|显示所有的数据库|
|use 数据库名|切换到指定的数据库|
|db|显示当前所在的数据库|
|db.dropDatabase()|删除当前数据库|
|show collections|显示当前数据库中的所有集合|
|db.collection.drop()|删除当前集|

1. 操作mongoDB的增删改查指令

    - 添加：

        ```Plain Text
        db.集合名.insert(文档对象)db.集合名.insertOne(文档对象)db.集合名.insertMany([文档对象，文档对象])
        ```

    - 查询：

        ```SQL
        db.集合名.find(查询条件)举例:db.students.find({age:18}),查找年龄为18的所有信息举例:db.students.find({age:18,name:'jack'}),查找年龄为18且名字为jack的学生常用操作符：    1. < , <= , > , >= , !==   对应为： $lt(less than) $lte(less than eq) $gt(great than) $gte $ne(not eq)        举例：db.集合名.find({age:{$gte:20}}),年龄是大于等于20的    2.逻辑或：使用$in 或 $or        查找年龄为18或20的学生        举例：db.students.find({age:{$in:[18,20]}})        举例：db.students.find({$or:[{age:18, },{name:'zs'}]})    3.逻辑非：$ne    4.正则匹配：        举例：db.students.find({name:/^T/})    5.$where能写函数：        db.students.find({$where:function(){            return this.name === 'zhangsan' && this.age === 18        }})投影：过滤掉不想要的数据，只保留想要展示的数据    举例：db.students.find({},{_id:0,name:0}),过滤掉id和name    举例：db.students.find({},{age:1}),只保留age补充：db.集合名.findOne(查询条件[,投影])，默认只要找到一个
        ```

    - 修改：

        ```JavaScript
        db.集合名.update(查询条件,要更新的内容[,配置对象])
        //使用$set修改指定内容，其他数据不变，不过只能匹配一个zhangsan    
        举例：db.students.update({name:'zhangsan'},{$set:{age:19}})//修改多个文档对象，匹配多个zhangsan,把所有zhangsan的年龄都替换为19    举例：db.students.update({name:'zhangsan'},{$set:{age:19}},{multi:true}) 补充：db.集合名.updateOne(查询条件,要更新的内容[,配置对象])      db.集合名.updateMany(查询条件,要更新的内容[,配置对象])
        ```

    - 删除

        ```Plain Text
        db.集合名.remove(查询条件)//删除所有年龄小于等于19的学生举例：db.students.remove({age:{$lte:19}})
        ```

## mongoose

> 实际开发中,需要通过代码对mongodb数据库软件进行操作.

node 平台内置mongodb模块.但是使用起来不方便,所以推荐使用mongoose这个第三方包

### 基本使用:

1. 下载 npm i mongoose

2. 引入 const mongoose = require(‘mongoose’)

3. 连接 mongoose.connect(‘mongodb://127.0.0.1:27017/数据库的名字’) 如何判断连接成功? mongoose.connect返回promise,状态为成功表示连接成功,否则连接失败

4. 连接成功之后, 创建Schema对象 用来约束插入到数据库中数据格式 cosnt schema = new mongoose.Schema({ 属性: { required: 表示必填, type: 数据类型(js的数据类型), default: 默认值, unique: 表示值不能重复 } })

5. 创建model对象(集合对象) const model = mongoose.model(‘集合名’, schema)

6. 接下来就可以利用model对象对mongodb数据进行增删改查

### mongoose增删改查

**注意： 下面所有方法，如果没有指定回调函数，则返回值是一个Promise对象**

- 添加

    ```Plain Text
     model.create(文档对象，回调函数)
    ```

- 查询

    ```Plain Text
     model.find(查询条件[,投影],callback)不管有没有数据，都返回一个数组
     model.findOne(查询条件[,投影],callback)找到了返回一个对象，没找到返回null
    ```

- 修改

    ```Plain Text
    model.updateOne(查询条件,要更新的内容[,配置对象],callback)
    model.updateMany(查询条件,要更新的内容[,配置对象],callback)
    ```

- 删除

    ```Plain Text
     model.deleteOne(查询条件,callback)
     model.deleteMany(查询条件,callback)
    ```

