## 项目说明
+ 共有6个主要页面
    + 主页
    + 商品列表页
    + 商品详情页
    + 购物车
    + 登录页
    + 注册页

### 1 首页
+ 主要功能
    + 轮播图
    + 楼层跳跃
    + 倒计时
    + 登录成功可以在页面显示成功的信息
    + 选项卡
+ 不足
    + 整体页面仿得不够真实
    + 楼层跳跃第一层高度没有算好
    + 秒杀功能只有一个倒计时,没有实时请求数据,并且时间到了需要手动设置时间

### 2 列表页
+ 主要功能
    + 图片懒加载
    + 点击可以通过本地存储数据加入购物车
    + 可以通过地址栏传入id的方式跳转到商品详情页

### 3 详情页
+ 主要功能
    + 手动小轮播图,轮播时添加了动画
    + 鼠标移入小图会该图片会显示在大图上
    + 放大镜
    + 选项卡
    + 点击加入购物车,通过获取输入框数据传入到本地
    + 加号减号可对页面数字进行加减
+ 不足
    + json数据不够全面,每个商品只有一张图片

### 4 购物车
+ 主要功能
    + 加号减号可以操作本地数据
    + 点击删除也可删除对应的本地数据
    + 复选框选择后可以进行总价的计算,也可批量删除商品
    + 有单选全选功能

+ 不足
    + 多个不同商品在同一家店铺加入购物车时,无法像正常网站购物车一样显示，只能是一种商品占一个位置
    + 数据渲染方式过于耗费性能

### 5 登录页
+ 主要功能
    + 正则验证手机号和密码
    + 登录成功后可跳转其他页面然后到首页
    + 登录成功后，本地存储当中的账户信息会做标记,在主页显示式可以用到
    + 选项卡
    + 扫码登录有动画效果
+ 不足
    + 动画效果会有闪动，效果不佳

### 6 注册页
+ 主要功能
    + 所有账户和密码都是通过正则验证
    + 设置了一个验证码功能
    + 所有注册成功后会有一个倒计时，然后跳转到登录页
    + 将注册成功的数据上传到本地存储


### 7 项目整体
+ 加深了git的认知
+ 加深了部分逻辑的印象

+ 不足
    + 数据处理不能够熟练掌握
    + 数据渲染方式过于单一
    + 部分逻辑不能想通
    + 代码逻辑不够清晰
    + git暂时还无法熟练掌握