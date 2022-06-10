// 导入 express模块
const express = require('express');

// 导入加密模块
const md5 = require('js-md5');

// 读取文件
const fs = require('fs');

// 创建 web服务器
const app = express();

// 允许跨域资源共享
const cors = require('cors');
// app.use(cors());

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000', // web前端服务器地址
  })
);

//配置解析 application/json 格式数据的内置中间件
app.use(express.json());

//配置中间件解析post application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

app.get('/api/login', (req, res) => {
  console.log(req.query, '💙💛 前台登录获取的数据');

  let str = req.query.userName.concat(req.query.password);

  fs.writeFile(
    'login.json',

    JSON.stringify([
      {
        userName: req.query.userName,
        password: req.query.password,
        access_token: md5(str),
      },
    ]),

    (err) => {
      if (err) {
        return;
      }
    }
  );

  res.send({
    status: 200,
    msg: '登录成功',
    data: {
      access_token: md5(str),
    },
  });
});

app.post('/postMock', (req, res) => {
  console.log(req.body, '-->post从前台获取的数据');
  res.send({
    status: 200,
    msg: 'post成功',
    RESULT_MES: '成功',
  });
});

// 启动服务器
app.listen(3001, () => {
  console.log('💙💛 服务在3001端口启动');
});
