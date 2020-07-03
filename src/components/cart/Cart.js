import React, { Component } from 'react'
import shopLogo from "../../images/cart_logo.png"
import productPic from "../../images/product_pic.png"
import "./Cart.scss"
export default class Cart extends Component {
    render() {
        return (
            <div className="yg-cart">
                {/* 购物车标题开始 */}
                <div className="yg-cart-header">
                    <i className="icon icon-return"></i>
                    <span className="yg-cart-title">购物车</span>
                    <span className="yg-cart-edit">编辑</span>
                </div>
                {/* 购物车标题结束 */}
                {/* 购物小车列表开始 */}
                <div className="yg-cart-list">
                    <div className="cart-list-item">
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
                                            <i className="icon icon-sub"></i>
                                            <span className="content-right-num">1</span>
                                            <i className="icon icon-add"></i>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* 购物小车列表结束 */}
                {/* 购物车顶部结算开始 */}
                <div className="yg-cart-tool">
                    <div className="cart-tool-left">
                        <span className="tool-left-totalPrice">
                            合计:¥ 136.00
                        </span>
                    </div>
                    <div className="cart-tool-right">
                        <span className="tool-right-pay">
                            去结算
                        </span>
                    </div>
                </div>
                {/* 购物车顶部结算结束 */}
            </div>
        )
    }
}
