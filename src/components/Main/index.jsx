import React, {Component} from 'react';

import img from '../../assets/img/109951167052035101a.jpg';
import './main.less';
import RouterView from '../../router'


class Main extends Component {
  render(){
    return (
      <main>
        <div>
          <div className='container'>
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

        <RouterView></RouterView>
       
      </main>
    )
  }
}

export default Main