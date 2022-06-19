import React from 'react'

import styleSheet from './index.module.less'


const {
  hd,

} = styleSheet


function NewDisc() {
  return (
    <div>
      <div className={hd}>
        <div>
          <a href="">新碟上架</a>
        </div>
        <div><a href="">更多</a><i></i></div>
      </div>
    </div>
  )
}

export default NewDisc
