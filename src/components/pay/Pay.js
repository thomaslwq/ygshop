import React, { Component } from 'react'
import "./pay.scss"
import shopLogo from "../../images/cart_logo.png"
import productPic from "../../images/product_pic.png"
import { withRouter } from "react-router-dom"

// "uaid":32 地址信息
// "uoid":17 订单编号
class Pay extends Component {
    goBack = (params) => {
        // 返回上一页
        this.props.history.go(-1);
    }
      pay (params) {
        // 跳转到一个单独的支付页面
        this.props.history.push("/payment");

    }

    render() {
        return (
            <div className="yg-pay">
                {/* 支付的导航条开始 */}
                <div className="yg-pay-header">
                    <i className="icon icon-return" onClick={this.goBack}></i>
                    <span className="pay-header-title">确认订单</span>
                    <span>&nbsp;</span>
                </div>
                {/* 支付的导航条结束 */}
                {/* 收货地址开始 */}
                <div className="yg-pay-address" onClick={(params) => {
                    this.props.history.push("/address")
                }
                }>
                    <div className="pay-address-left">
                        <div className="address-left-top">
                            收货人:郭小帅 &nbsp; 13988888888
                       </div>
                        <div className="address-left-bottom">
                            广州市番禺区市桥街道81号
                       </div>
                    </div>
                    <div className="pay-address-right">
                        <i className="icon icon-select"></i>
                    </div>
                </div>
                {/* 收货地址结束 */}
                {/* 购物小车列表开始 */}
                <div className="yg-pay-list">
                    <div className="pay-list-item">
                        <div className="list-item-shop">
                            <i className="icon icon-radio"></i>
                            <img src={shopLogo} alt="" />
                            <span className="list-item-title">海绵宝宝</span>
                        </div>
                        <div className="list-item-content">
                            <div className="item-content-left">
                                <img src={productPic} alt="" />
                                <div className="item-content-desc">
                                    <span className="content-desc-title">首款海绵包包</span>
                                    <span className="content-desc-type">
                                        颜色:黑色
                                    </span>
                                    <div className="content-desc-bottom">
                                        <span className="content-desc-price">
                                            ¥68.00
                                       </span>
                                        <div className="item-content-right">

                                            <span className="content-right-num">X1</span>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* 购物小车列表结束 */}
                {/* 购物车结算开始 */}
                <div className="yg-pay-tool">
                    <div className="pay-tool-left">
                        <span className="tool-left-totalPrice">
                            合计:¥ 136.00
                        </span>
                    </div>
                    <div className="pay-tool-right">
                        <span className="tool-right-pay" onClick={this.pay.bind(this)}>
                            去结算
                        </span>
                    </div>
                </div>
                {/* 购物车结算结束 */}
            </div>
        )
    }
}
export default withRouter(Pay)