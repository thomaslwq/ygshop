import React, { Component } from 'react'
import "./Home.scss"
import axios from "../../utils/axios"
import Axios from "axios"
import Swiper from "swiper"
import "swiper/css/swiper.css"
import Nav01 from "../../images/nav01.png"
import Nav02 from "../../images/nav02.png"
import Nav03 from "../../images/nav03.png"
import Nav04 from "../../images/nav04.png"
import Nav05 from "../../images/nav05.png"
import customer01 from "../../images/customer01.jpg"
import customer02 from "../../images/customer02.jpg"
import customer03 from "../../images/customer03.jpg"
import customer04 from "../../images/customer04.jpg"
import { withRouter } from "react-router-dom"
class Home extends Component {
    constructor(props) {
        super(props);
        const CancelToken = Axios.CancelToken;
        this.source = CancelToken.source();
    }
    state = {
        swiper_list: [], //轮播图列表
        product_list: [] // 促销产品列表
    }
    componentWillUnmount() {
        console.log("卸载Home组件");
        this.swiper = null;
        this.source.cancel('Operation canceled by the user.');
    }
    componentDidMount() {

        axios.get("getHotProducts", {
            cancelToken: this.source.token
        }).then(res => {
            this.setState({
                product_list: res.wdata
            })
        }).catch(err => console.log(err))
        axios.get("getIndexLoopimg", {
            cancelToken: this.source.token
        }).then(res => {
            this.setState({
                swiper_list: res.wdata
            }, () => {
                this.swiper = new Swiper('.swiper-container', {
                    // direction: 'vertical', // 垂直切换选项
                    loop: true, // 循环模式选项

                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                    }
                })
            })
        }).catch(err => console.log(err));
    }
    render() {
        return (
            <div className="yg-index">
                {/* 首页顶部导航开始 */}
                <div className="yg-index-header">
                    <i className="icon icon-menu"></i>
                    <span className="index-header-title">云购商城</span>
                    <i className="icon icon-soso"></i>
                </div>
                {/* 首页顶部导航结束 */}
                {/* 首页轮播图开始 */}
                <div className="yg-index-slider">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {
                                this.state.swiper_list.map(v => <div key={v.loopimg_url} className="swiper-slide"> <img src={v.loopimg_url} alt="" /></div>)
                            }

                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
                {/* 首页轮播图结束 */}
                {/* 首页导航开始 */}
                <div className="yg-index-nav">
                    <div className="index-nav-imageWrapper">
                        <div className="nav-imageWrapper-item">
                            <img src={Nav01} alt="" />
                            <span>大聚惠</span>
                        </div>
                        <div className="nav-imageWrapper-item">
                            <img src={Nav02} alt="" />
                            <span>海外购</span>
                        </div>
                        <div className="nav-imageWrapper-item">
                            <img src={Nav03} alt="" />
                            <span>超市百货</span>
                        </div>
                        <div className="nav-imageWrapper-item">
                            <img src={Nav04} alt="" />
                            <span>厂家直销</span>
                        </div>
                        <div className="nav-imageWrapper-item">
                            <img src={Nav05} alt="" />
                            <span>美食娱乐</span>
                        </div>
                    </div>
                </div>
                {/* 首页导航结束 */}
                {/* 首页客户列表开始 */}
                <div className="yg-index-customer">
                    <h1>商城客户</h1>
                    <div className="index-customer-list">
                        <div className="customer-list-item">
                            <img src={customer01} alt="" />
                            <span>海绵包包</span>
                        </div>
                        <div className="customer-list-item">
                            <img src={customer02} alt="" />
                            <span>韩国代购</span>
                        </div>
                        <div className="customer-list-item">
                            <img src={customer03} alt="" />
                            <span>ARC潮店</span>
                        </div>
                        <div className="customer-list-item">
                            <img src={customer04} alt="" />
                            <span>欧力女装</span>
                        </div>
                    </div>
                </div>
                {/* 首页客户列表结束 */}
                {/* 精选促销标题的开始 */}
                <div className="yg-index-ptitle">
                    <h1>精选促销</h1>
                </div>
                {/* 精选促销标题的结束 */}
                {/* 精选促销产品的开始 */}
                <div className="yg-index-product">
                    {
                        this.state.product_list.map((v, key) => {
                            return (<div key={key} onClick={ (params) => {
                                // 跳转到产品详情页
                                this.props.history.push("/product/"+v.pid);
                            }
                            } className="index_product_item">
                                <img src={v.product_url} alt="" />
                                <h1>{v.product_name}</h1>
                                <div className="product_item_price">
                                    <span className="discount_price">¥{v.product_price}</span>
                                    <span className="origin_price">¥{v.product_origin_price}</span>
                                </div>
                            </div>)
                        })
                    }
                </div>
                {/* 精选促销产品的结束 */}
            </div>
        )
    }
}

export default withRouter(Home)