# 1. 接口数据

## 1.1. 商城接口
***主要接口字段说明***
***ret 接口标识码 等于0时，接口处理成功，非0时 接口信息出错***
***msg 接口返回信息说明***
***imgs 逗号隔开字符串***
***wdata 接口数据返回字段（对象)***

1. 获取短信验证码

   ```json
   @url http://s.linweiqin.com/api/s/getMobileCode
   @method post/get
   @params mobile
   @return msg,ret,wdata
   @wdata: null
   ```

1. 用户注册接口

   ```json
   @url http://s.linweiqin.com/api/s/createUser
   @method post/get
   @params mobile,username,password,code(验证码)
   @return msg,ret,wdata
   @wdata: username(名称),user_id,avator_url
   ```

2. 用户登录接口

   ```json
   @url http://s.linweiqin.com/api/s/loginCheck
   @method post/get
   @params username,password
   @return msg,ret,wdata
   @wdata: oauth_token(登录凭证),oauth_expire_time(登录凭证过期时间),user_id(用户ID),username(名称),avator_url(头像路径)
   ```

3. 用户退出接口

   ```json
   @url http://s.linweiqin.com/api/s/logout
   @method post/get
   @params oauth_token
   @return msg,ret,wdata
   @wdata: 空
   ```

4. 用户个人信息修改

   ```json
   @url http://s.linweiqin.com/api/s/updateUserInfo
   @method post/get
   @params username,avator_url,oauth_token
   @return msg,ret,wdata
   @wdata: 空
   ```

5. 重置密码

   ```json
   @url http://s.linweiqin.com/api/s/updatePassword
   @method post/get
   @params currenPassword,updatePassword
   @return msg,ret,wdata
   @wdata: 空
   ```
   
6. 首页轮播图
   ```json
   @url http://s.linweiqin.com/api/s/getIndexLoopimg
   @method post/get
   @params null
   @return msg,ret,wdata
   @wdata: loopimg_url(轮播图图片路径),loopimg_title(轮播图标题),loopimg_href(轮播图超链接)
   ```
7. 产品接口
   ```json
   @url http://s.linweiqin.com/api/s/getProducts
   @method post/get
   @params cid(可选)
   @return msg,ret,wdata
   @wdata: pid(产品ID),cid(分类ID),product_name(产品名称),product_origin_price(产品原价),product_price(产品价格),product_spec(产品规格),product_url(产品首图),product_urls(产品轮播图),product_desc(产品详情),created_at(创建时间)
   ```
8. 分类接口
   ```json
   @url http://s.linweiqin.com/api/s/getCategorys
   @method post/get
   @params null
   @return msg,ret,wdata
   @wdata: cid(分类ID),category_name(分类名称),created_at(创建时间),has_sub(是否有下级),category_url(分类图片),sub_category(子类分类)
   ```
9. 商品详情接口
   ```json
   @url http://s.linweiqin.com/api/s/getProductDetail
   @method post/get
   @params pid
   @return msg,ret,wdata
   @wdata: call(020电话),pid(产品ID),cid(分类ID),product_name(产品名称),product_origin_price(产品原价),product_price(产品价格),product_spec(产品规格),product_url(产品首图),product_urls(产品轮播图),product_desc(产品详情),created_at(创建时间)
   ```
10. 地址创建
   ```json
   @url http://s.linweiqin.com/api/s/createUserAddress
   @method post/get
   @params address(详细地址),address_name(收件人),address_mobile(联系方式),oauth_token
   @return msg,ret,uaid
   @uaid:  地址ID
   ```
11. 地址修改
   ```json
   @url http://s.linweiqin.com/api/s/updateUserAddress
   @method post/get
   @params address(详细地址),address_name(收件人),address_mobile(联系方式),oauth_token
   @return msg,ret,uaid
   @uaid:  地址ID
   ```
12. 地址删除
   ```json
   @url http://s.linweiqin.com/api/s/deleteUserAddress
   @method post/get
   @params uaid,oauth_token
   @return msg,ret,uaid
   @uaid:  地址ID
   ```
13. 地址列表
   ```json
   @url http://s.linweiqin.com/api/s/getUserAddressList
   @method post/get
   @params oauth_token
   @return msg,ret,wdata
   @wdata: address(详细地址),address_name(收件人),address_mobile(联系方式),uaid(地址ID)
   ```
10. 购物车接口
   ```json
   @url http://s.linweiqin.com/api/s/getCarts
   @method post/get
   @params oauth_token
   @return msg,ret,wdata
   @wdata: ucid(购物车ID),pid(产品ID),uid(用户ID),product_name(产品名称),product_price(产品价格),product_spec(产品规格),product_url(产品首图),product_number(购物车数量),created_at(创建时间)
   ```
11. 购物车增减接口
   ```json
   @url http://s.linweiqin.com/api/s/updateCarts
   @method post/get
   @params action 参数默认为 add
   @params 当 action 等于 add 时, productNumber(增加数量),pid(产品ID),oauth_token
   @params 当 action 等于 reduce 时,productNumber(减少数量),pid(产品ID),oauth_token
   @params 当 action 等于 delete 时,pid(产品ID),oauth_token
   @return msg,ret,wdata
   @wdata: 空
   ```
12. 订单详情
   ```json
   @url http://s.linweiqin.com/api/s/getOrders
   @method post/get
   @params oauth_token
   @return msg,ret,wdata
   @wdata: uoid(订单ID),order_price(订单价格),order_express_info(订单地址信息),order_status(订单状态，0未支付，1已支付，2订单取消),order_info(商品详情)
   @order_info : ucid(购物车ID),uid(用户ID),pid(产品ID),product_price(产品价格),product_name(产品名称),product_url(产品首图),product_number(购物车数量),
   ```
13. 订单创建
   ```json
   @url http://s.linweiqin.com/api/s/createOrder
   @method post/get
   @params oauth_token,uaid
   @return msg,ret,uoid
   @uoid:  订单ID
   ```
14. 订单取消
   ```json
   @url http://s.linweiqin.com/api/s/cancelOrder
   @method post/get
   @params oauth_token,uoid
   @return msg,ret,wdata
   @wdata: 空
   ```

16. 微信预支付返回数据接口
   ```json
   @url http://s.linweiqin.com/api/s/wxPrepay
   @method post/get
   @params oauth_token,uoid
   @return msg,ret,payUrl
   @payUrl: 支付跳转链接
   ```
17. 精选产品接口
   ```json
   @url http://s.linweiqin.com/api/s/getHotProducts
   @method post/get
   @params cid(可选)
   @return msg,ret,wdata
   @wdata: pid(产品ID),cid(分类ID),product_name(产品名称),product_origin_price(产品原价),product_price(产品价格),product_spec(产品规格),product_url(产品首图),product_urls(产品轮播图),product_desc(产品详情),created_at(创建时间)
   ```

18. 查询某个订单详情
   ```json
   @url http://s.linweiqin.com/api/s/getOrder
   @method post
   @params oauth_token,uoid
   @return msg,ret,wdata
   @wdata: uoid(订单ID),order_price(订单价格),order_express_info(订单地址信息),order_status(订单状态，0未支付，1已支付，2订单取消),order_info(商品详情)
   @order_info : ucid(购物车ID),uid(用户ID),pid(产品ID),product_price(产品价格),product_name(产品名称),product_url(产品首图),product_number(购物车数量),
   ```