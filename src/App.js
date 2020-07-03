import React from 'react';
/* 
  1. 引入的sass 文件默认 后缀名 .scss
*/
import './App.scss';
// import Icon from "./Icon"
// 引入Tabbar 组件
import TabBar from "./components/tabbar/TabBar"
import Home from "./components/home/Home"
import Community from "./components/community/Community"
import Cart from "./components/cart/Cart"
import My from "./components/my/My"
import Category from "./components/category/Category"
import Demo from "./demo"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import Product from "./components/product/Product"
import Pay from "./components/pay/Pay"
import Payment from "./components/pay/Payment"
import Address from "./components/address/Address"
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom"
function App() {
  return (
    <div className="App">
      {/* <TabBar></TabBar> */}
      <Router>
        <Switch>
          <Route exact path="/" render={() => <TabBar><Home></Home></TabBar>}></Route>
          <Route exact path="/community" render={() => <TabBar><Community></Community></TabBar>}></Route>
          <Route exact path="/cart" render={() => <TabBar><Cart></Cart></TabBar>}></Route>
          <Route exact path="/my" render={() => <TabBar><My></My></TabBar>}></Route>
          <Route exact path="/category" render={() => <Category></Category>}></Route>
          <Route exact path="/demo" render={() => <Demo></Demo>}></Route>
          <Route exact path="/login" render={() => <Login></Login>}></Route>
          <Route exact path="/register" render={() => <Register></Register>}></Route>
          <Route exact path="/product/:productId" render={() => <Product></Product>}></Route>
          <Route exact path="/pay" render={() => <Pay></Pay>}></Route>
          <Route exact path="/payment" render={() => <Payment></Payment>}></Route>
          <Route exact path="/address" render={() => <Address></Address>}></Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
