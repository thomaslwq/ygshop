import React, { Component } from 'react'
import "./TabBar.scss"
import { withRouter } from "react-router-dom"
class TabBar extends Component {
    state = {
        activeTab: "home"
    }
    componentWillUnmount(){
        console.log("组件销毁");
    }
    componentDidUpdate(){
        console.log("tabbar 组件更新");
    }
    componentDidMount() {
        // 页面重新加载的时候 获取当前页面的 activeTab
        let activeTab = window.location.hash.split("/")[1];
        if (activeTab === "" || activeTab === "community" || activeTab === "cart" || activeTab === "my"){
            if(activeTab === ""){
                activeTab = "home"
            }
            this.setState({
                activeTab
            })
        }else{
            this.setState({
                activeTab:"home"
            })
        }
    }
    // tab 点击事件
    handleTabChange = (tab) => {
        console.log(tab);
        let tabMap = {
            "home": {
                path: "/"
            },
            "community": {
                path: "/community"
            },
            "cart": {
                path: "/cart"
            },
            "my": {
                path: "/my"
            }
        }
        this.props.history.push(tabMap[tab].path);
        this.setState({
            activeTab: tab
        })
    }

    render() {
        return (
            <div className="yg-shop-tabbar">
                {/* tabbar 内容开始 */}
                <div className="tabbar-content">
                    {this.props.children}
                    {/* <Home></Home> */}
                </div>
                {/* tabbar 内容结束 */}
                {/* 底部功能栏开始 */}
                <div className="tabbar-footer">
                    <div className="tabbar-footer-home" onClick={this.handleTabChange.bind(this, "home")}>
                        <i className={this.state.activeTab === "home" ? "icon icon-home-o" : "icon icon-home"}></i>
                        <span className={this.state.activeTab === "home" ? "activeTab footer-item-title" : "footer-item-title"}>首页</span>
                    </div>
                    <div className="tabbar-footer-community" onClick={this.handleTabChange.bind(this, "community")}>
                        <i className={this.state.activeTab === "community" ? "icon icon-community-o" : "icon icon-community"}></i>
                        <span className={this.state.activeTab === "community" ? "activeTab footer-item-title" : "footer-item-title"}>社区</span>
                    </div>
                    <div className="tabbar-footer-cart" onClick={this.handleTabChange.bind(this, "cart")}>
                        <i className={this.state.activeTab === "cart" ? "icon icon-cart-o" : "icon icon-cart"}></i>
                        <span className={this.state.activeTab === "cart" ? "activeTab footer-item-title" : "footer-item-title"}>购物车</span>
                    </div>
                    <div className="tabbar-footer-my" onClick={this.handleTabChange.bind(this, "my")}>
                        <i className={this.state.activeTab === "my" ? "icon icon-my-o" : "icon icon-my"}></i>
                        <span className={this.state.activeTab === "my" ? "activeTab footer-item-title" : "footer-item-title"}>我</span>
                    </div>
                </div>
                {/* 底部功能栏结束 */}
            </div>
        )
    }
}
export default withRouter(TabBar)
