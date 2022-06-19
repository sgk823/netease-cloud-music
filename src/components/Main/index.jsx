import React, { Component } from 'react'
import Recommend from '../recommend'
import NewDisc from '../newDisc'
import List from '../list'

import img from '../../assets/img/109951167052035101a.jpg'
import styleSheet from './index.module.less'


const {banner, container, discover} = styleSheet


class Main extends Component {
  render(){
    return (
      <main>
        <div className={banner}>
          <div className={container}>
            <img src={img} alt="" width='730'/>
            <div><a href=""></a></div>
            <div><a href=""></a></div>
            <div>
              <span></span><span></span><span></span><span></span>
              <span></span><span></span><span></span><span></span><span></span>
            </div>
            <div>
              <a href=""></a>
              <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
            </div>
          </div>
        </div>
        <div className={discover}>
          <div>
            <div>
              <Recommend />
              <NewDisc />
              <List />
            </div>
            <div>
              
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Main