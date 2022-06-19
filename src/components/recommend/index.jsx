import React, {useState} from 'react'

import styleSheet from './index.module.less'
import img from './imgs/1099.jpg'


const {
  hd,
  content,
} = styleSheet


function Recommend() {
  const [recommendList, _] = useState([
    {
      img,
      count: '28万',
      desc: '父亲节快乐 | 不只是今天,每一天我都很爱你'
    },
    {
      img,
      count: '28万',
      desc: '父亲节快乐 | 不只是今天,每一天我都很爱你'
    },
    {
      img,
      count: '28万',
      desc: '父亲节快乐 | 不只是今天,每一天我都很爱你'
    },
    {
      img,
      count: '28万',
      desc: '父亲节快乐 | 不只是今天,每一天我都很爱你'
    },
    {
      img,
      count: '28万',
      desc: '父亲节快乐 | 不只是今天,每一天我都很爱你'
    },
    {
      img,
      count: '28万',
      desc: '父亲节快乐 | 不只是今天,每一天我都很爱你'
    },
    {
      img,
      count: '28万',
      desc: '父亲节快乐 | 不只是今天,每一天我都很爱你'
    },
    {
      img,
      count: '28万',
      desc: '父亲节快乐 | 不只是今天,每一天我都很爱你'
    },
  ])

  return (
    <div>
      <div className={hd}>
        <div>
          <a href="">热门推荐</a>
          <div>
            <a href="">华语</a><span>|</span><a href="">流行</a><span>|</span>
            <a href="">摇滚</a><span>|</span><a href="">民谣</a><span>|</span><a href="">电子</a>
          </div>
        </div>
        <div><a href="">更多</a><i></i></div>
      </div>
      <ul className={content}>
        {
          recommendList.map(r => (
            <li>
              <div>
                <img src={r.img} alt="" />
                <a href=""></a>
                <div>
                  <span><i></i>{ r.count }</span><a href=""></a>
                </div>
              </div>
              <p><a href="">{ r.desc }</a></p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Recommend