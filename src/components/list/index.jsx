import React from 'react'

import styleSheet from './index.module.less'

const {hd} = styleSheet

function List() {
  return (
    <div>
      <div className={hd}>
        <div>
          <a href="">榜单</a>
        </div>
        <div><a href="">更多</a><i></i></div>
      </div>
    </div>
  )
}

export default List