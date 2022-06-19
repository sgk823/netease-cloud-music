import React, {Component, Fragment} from 'react';
import {
  useNavigate,

} from 'react-router-dom'
import { nanoid } from 'nanoid';

import Login from '../../pages/Login';
import './header.less';


function Header(props){
  const navigate = useNavigate()

  return (
    <header>
      <div>
        <div className="container">
          <div><a href=""></a></div>
          <div>
            <ul>
              <li><a onClick={()=>navigate('/')}><span>发现音乐</span><em></em></a></li>
              <li><a onClick={()=>navigate(`/my/love?id=${nanoid()}`)}><span>我的音乐</span><em></em></a></li>
              <li><a href=""><span>关注</span><em></em></a></li>
              <li><a href=""><span>商城</span><em></em></a></li>
              <li><a href=""><span>音乐人</span><em></em></a></li>
              <li><a href=""><span>下载客户端</span><em></em></a></li>
            </ul>
          </div>
          <div><a href="">登录</a></div>
          <div><a href="">创作者中心</a></div>
          <div><input type="text" /></div>
        </div>
      </div>

      <div>
        <div className="container">
          <ul>
            <li><a href=""><span>推荐</span></a></li>
            <li><a onClick={()=>navigate('/discover/toplist')}><span>排行榜</span></a></li>
            <li><a onClick={()=>navigate('/discover/playlist')}><span>歌单</span></a></li>
            <li><a href=""><span>主播电台</span></a></li>
            <li><a href=""><span>歌手</span></a></li>
            <li><a href=""><span>新碟上架</span></a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header