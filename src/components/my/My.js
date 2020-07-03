import React, { Component } from 'react'
import "./My.scss"
import user from "../../images/user.jpg"
import user_bg from "../../images/user_bg.png"
import order from "../../images/order.png"
import collect from "../../images/collect.png"
import service from "../../images/service.png"
import about from "../../images/about.png"
import set from "../../images/set.png"
import { withRouter } from "react-router-dom"
class My extends Component {
    state = {
        isLogin:false // 登陆状态
    }
    handleLogin=(params) => {
        this.props.history.push("/login");
    }
    componentDidMount(){
        let userInfo = JSON.parse(localStorage.getItem("userinfo"))||{};
        let isLogin = userInfo.oauth_token ? true :false;
        this.setState({
            isLogin
        })

    }
    
    render() {
        return (
            <div className="yg-my">
                <div className="yg-my-profile">
                {
                    this.state.isLogin ?
                    // {/* 登陆后开始 */}
                    <div className="my-profile-bg">
                        <img className="profile-bg" src={user_bg} alt="" />
                        <div className="profile-bg-circle">
                            <img className="profile-bg-user" src={user} alt="" />
                        </div>

                    </div> :
                    // {/* 登陆后结束 */}
                    // {/* 登陆前开始 */}
                     <div className="my-profile-login">
                        <img className="profile-bg" src={user_bg} alt="" />
                        <div className="profile-login-button" onClick={this.handleLogin}>
                            登陆
                        </div>
                     </div>
                    // {/* 登陆前结束 */}

                }


                </div>
                {/* 我的订单开始 */}
                <div className="yg-my-order">
                    <div className="my-order-left">
                        <img src={order} alt="" />
                        <span>我的订单</span>
                    </div>
                    <div className="my-order-right">
                        <span className="order-right-text">查看所有的订单</span>
                        <i className="icon icon-select"></i>
                    </div>
                </div>
                {/* 我的订单结束 */}
                {/* 订单功能区导航开始 */}
                <div className="yg-my-orderNav">
                    <div className="my-orderNav-item">
                        <i className="icon icon-pay"></i>
                        <span className="orderNav-item-text">待付款</span>
                    </div>
                    <div className="my-orderNav-item">
                        <i className="icon icon-recieve"></i>
                        <span className="orderNav-item-text">待收货</span>
                    </div>
                    <div className="my-orderNav-item">
                        <i className="icon icon-recieve-good"></i>
                        <span className="orderNav-item-text">已收货</span>
                    </div>
                    <div className="my-orderNav-item">
                        <i className="icon icon-cancel"></i>
                        <span className="orderNav-item-text">已取消</span>
                    </div>
                    <div className="my-orderNav-item">
                        <i className="icon icon-aftersale"></i>
                        <span className="orderNav-item-text">售后</span>
                    </div>
                </div>
                {/* 订单功能区导航结束 */}
                {/* 系统功能区开始 */}
                <div className="yg-my-systemFunc">
                    <div className="my-systemFunc-list">
                        <div className="systemFunc-list-item">
                            <div className="list-item-left">
                                <img src={collect} alt=""/>
                                <span>我的收藏</span>
                            </div>
                            <div className="list-item-right">
                                <span>2</span>
                                <i className="icon icon-select"></i>
                            </div>
                        </div>
                        <div className="systemFunc-list-item">
                            <div className="list-item-left">
                                <img src={service} alt=""/>
                                <span>联系客服</span>
                            </div>
                            <div className="list-item-right">
                                <i className="icon icon-select"></i>
                            </div>
                        </div>
                        <div className="systemFunc-list-item">
                            <div className="list-item-left">
                                <img src={about} alt=""/>
                                <span>关于我们</span>
                            </div>
                            <div className="list-item-right">
                             
                                <i className="icon icon-select"></i>
                            </div>
                        </div>
                        <div className="systemFunc-list-item">
                            <div className="list-item-left">
                                <img src={set} alt=""/>
                                <span>设置</span>
                            </div>
                            <div className="list-item-right">
                                <i className="icon icon-select"></i>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 系统功能区结束 */}
            </div>
        )
    }
}
export default withRouter(My)