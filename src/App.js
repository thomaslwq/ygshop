import React from 'react';
import './App.scss';
import ToolBar from "./components/toolbar/ToolBar"
import Index from "./components/index/Index"
import Community from "./components/community/Community"
import Cart from "./components/cart/Cart"
import My from "./components/my/My"
import Category from "./components/category/Category"

import { HashRouter as Router,Route} from "react-router-dom"
function App() {
  return (
    <div className="yg-app">
        <Router>
          <Route exact path="/" render={ ()=><ToolBar><Index></Index></ToolBar> }></Route>
          <Route exact path="/community" render={ ()=><ToolBar><Community></Community></ToolBar> }></Route>
          <Route exact path="/cart" render={ ()=><ToolBar><Cart></Cart></ToolBar> }></Route>
          <Route exact path="/my" render={ ()=><ToolBar><My></My></ToolBar> }></Route>
          <Route exact path="/category" render={ ()=> <Category></Category>}></Route>
        </Router>
    </div>
  );
}

export default App;
