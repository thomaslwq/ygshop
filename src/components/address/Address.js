import React,{ Component} from "react"
import { withRouter } from "react-router-dom"
import "./address.scss"
import axios from "../../utils/axios"
class Address extends Component{
    state = {
        address_name:"郭小帅",
        address_mobile:"13688888888",
        address:"广东省广州市番禺区市桥街道81号"
    }
    saveAddressName = (e) => {
        this.setState({
            address_name:e.target.value
        })
    }
    saveMobile = (e) => {
        this.setState({
            address_mobile:e.target.value
        })
    }
    saveAddressDetail = (e) => {
        this.setState({
            address:e.target.value
        })
    }
    
    // 点击保存按钮
    saveAddress = (params) => {
        let {address_name,address_mobile,address} = this.state;
        console.log(address_name,address_mobile,address);
        axios.post("createUserAddress",{
            address_name,address_mobile,address
        }).then(res=>{
            console.log(res);
            localStorage.setItem("uaid",res.uaid);
        }).catch(err=>console.log(err))
    }
    
    render(){
        return <div className="yg-address">
            <div className="yg-address-header">
                <i className="icon icon-return" onClick={
                    (params) => {
                        this.props.history.go(-1);
                    }
                }></i>
                <span className="address-header-title">修改地址</span>
                <span> &nbsp; </span>
            </div>
            <div className="yg-address-content">
                <div className="address-content-contact">
                    <label htmlFor="contact">联系人</label>
                    <input type="text"
                    value={this.state.address_name }
                    onChange={this.saveAddressName }
                    id="contact"/>
                </div>
                <div className="address-content-phone">
                    <label htmlFor="phone">手机号</label>
                    <input type="text" 
                    value={this.state.address_mobile }
                    onChange={this.saveMobile}
                    id="phone"/>
                </div>
                <div className="address-content-contact">
                    <label htmlFor="address">详细地址</label>
                    <input type="text" 
                    value={this.state.address}
                    onChange={this.saveAddressDetail}
                    id="address"/>
                </div>
            </div>
            <div className="yg-address-save">
                <button onClick={this.saveAddress}>保存地址</button> 
            </div>
        </div>
    }
}
export default withRouter(Address)