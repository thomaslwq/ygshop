import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import "./toolbar.scss"
class ToolBar extends Component {
    componentDidMount() {
        let tab = window.location.hash.split("/")[1];
        if (!tab || tab === "community" || tab === "cart" || tab === "my") {
            if(!tab)
                tab = "index";
            this.setState({
                tab:tab
            })
        }else{
            
            this.props.history.push("/");// 没有匹配到的路由回到首页
        }


    }
    state = {
        tab: "index"
    }
    handleTabClick = (tab) => {
        if (tab === "index" && this.state.tab !== "index") {
            this.props.history.push("/");
        }
        if (tab === "community" && this.state.tab !== "community") {
            this.props.history.push("/community");
        }
        if (tab === "cart" && this.state.tab !== "cart") {
            this.props.history.push("/cart");
        }
        if (tab === "my" && this.state.tab !== "my") {
            this.props.history.push("/my");
        }
        this.setState({
            tab
        })
    }

    render() {
        return (
            <div className="yg-toolbar">
                <div className="yg-toolbar-content">
                    {this.props.children}
                </div>
                <div className="yg-toolbar-footer" >
                    <div className="footer-index" onClick={() => {
                        this.handleTabClick("index")
                    }}>
                        <i className={this.state.tab === "index"?"icon icon-home-o":"icon icon-home"}></i>
                        <span className={this.state.tab === "index"?"yg-toolbar-active":""}>首页</span>
                    </div>
                    <div className="footer-community" onClick={() => {
                        this.handleTabClick("community")
                    }}>
                        <i className={this.state.tab === "community"?"icon icon-community-o":"icon icon-community"}></i>
                        <span className={this.state.tab === "community"?"yg-toolbar-active":""}>社区</span>
                    </div>
                    <div className="footer-cart" onClick={() => {
                        this.handleTabClick("cart")
                    }}>
                        <i className={this.state.tab === "cart"?"icon icon-cart-o":"icon icon-cart"}></i>
                        <span className={this.state.tab === "cart"?"yg-toolbar-active":""}>购物车</span>  
                    </div>
                    <div className="footer-my" onClick={() => {
                        this.handleTabClick("my")
                    }}>
                        <i className={this.state.tab === "my"?"icon icon-my-o":"icon icon-my"}></i>
                        <span className={this.state.tab === "my"?"yg-toolbar-active":""}>我</span>  
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(ToolBar)
