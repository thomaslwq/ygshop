import React, { Component } from 'react'
import "./Comunity.scss"
import user from "../../images/user.jpg"
import user01 from "../../images/user01.png"
import user02 from "../../images/user02.png"
import user03 from "../../images/user03.png"

export default class Community extends Component {
    render() {
        return (
            <div className="yg-community">
                {/* 社区导航的开始 */}
                <div className="yg-community-header">
                <i className="icon icon-return"></i>
                <h1>社区</h1>  
                <i className="icon icon-addCommunity"></i>
                </div>
                {/* 社区导航的结束 */}
                {/* 社区列表的开始 */}
                <div className="yg-community-list">
                    <div className="community-list-item">
                        <div className="community-header">
                            <img src={user} alt=""/>
                            <span>我是郭小帅</span>
                            <p>[潮流服饰]:秋季大换装，就在我的小店，欢迎参观哈....</p>
                        </div>
                        <div className="community-content">
                            <div className="community-content-item">
                                <img src={user01} alt=""/>
                            </div>
                            <div className="community-content-item">
                                <img src={user02} alt=""/>
                            </div>
                            <div className="community-content-item">
                                <img src={user03} alt=""/>
                            </div>
                        </div>
                        <div className="community-footer">
                            <em>刚刚</em>
                            <i className="icon icon-share"></i>
                        </div>
                    </div>
                </div>
                {/* 社区列表的结束 */}
            </div>
        )
    }
}
