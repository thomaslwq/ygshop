import React, { Component } from 'react'
import "./payment.scss"
import axios from "../../utils/axios"
import QRCode from "qrcode.react"
import { withRouter } from "react-router-dom"
class Payment extends Component {

    state = {
        payUrl: ""
    }
    timeId = null;
    is_request = false;// 表示是否当前正在请求中
    componentWillUnmount() {
        clearInterval(this.timeId);
    }
    async componentDidMount() {
        //  支付的流程
        try {
            // 1. 创建订单 ID  uoid
            let { uoid } = await axios.post("createOrder", {
                uaid: localStorage.getItem("uaid")
            });
            // 2. 创建 支付的url
            let { payUrl } = await axios.post("wxPrepay", {
                uoid
            })
            this.setState({ payUrl });
            // 设置一个定时器 定时查询订单的状态(只有上个查询状态有返回的时候 再查)
            this.timeId = setInterval(() => {
                if (!this.is_request) {
                    axios.post("getOrder", {
                        uoid
                    }).then(res => {
                        if (res.wdata.order_status === 1) {
                            // 已支付
                            console.log("订单支付成功");
                            this.props.history.push("/my");
                        } else if (res.wdata.order_status === 0) {
                            //  未支付

                        } else {
                            // 订单取消
                            console.log("订单取消了");
                            this.props.history.push("/my");
                        }
                    }).catch(err=>console.log(err)).finally(()=>{
                        this.is_request = false;
                    })
                }

            }, 1000)

        } catch (e) {
            console.log("支付失败:" + e);
        }
    }
    render() {
        return (
            <div className="yg-payment">
                <h1>支付页面</h1>
                <QRCode
                    value={this.state.payUrl}  //value参数为生成二维码的链接
                    size={200} //二维码的宽高尺寸
                    fgColor="#000000"  //二维码的颜色
                />
            </div>
        )
    }
}
export default withRouter(Payment)
