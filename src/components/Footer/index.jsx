import React, {Component} from 'react';
import './footer.less';

const template = (
<footer>
  <div className="container">
    <div>
      <p>
        <a href="">条款服务</a><span>|</span><a href="">隐私政策</a><span>|</span><a href="">儿童隐私政策</a><span>|</span>
        <a href="">版权投诉指引</a><span>|</span><a href="">意见反馈</a><span>|</span><a href="">广告合作</a>
      </p>
      <p>
        <span>网易公司版权所有©1997-2022</span><span>杭州乐读科技有限公司运营: </span>
        <a href="">浙网文[2021] 1186-054号</a>
      </p>
      <p>
        <span>违法和不良信息举报电话: 0571-89853516</span>
        <span>举报邮箱: </span><a href="">ncm5990@163.com</a>
      </p>
      <p>
        <a href="">粤B2-20090191-18  工业和信息化部备案管理系统网站</a>
        <a href=""><em></em><span>浙公网安备 33010902002564号</span></a>
      </p>
    </div>
    <div>
      <ul>
        <li><a href=""></a><span></span></li>
        <li><a href=""></a><span></span></li>
        <li><a href=""></a><span></span></li>
        <li><a href=""></a><span></span></li>
        <li><a href=""></a><span></span></li>
      </ul>
    </div>
  </div>
</footer>
)

class Footer extends Component {
  render(){
    return template
  }
}

export default Footer

