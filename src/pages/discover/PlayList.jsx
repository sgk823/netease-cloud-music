import React,{
  Component,

} from 'react'
import {withRouter} from '../../utils'


class PlayList extends Component {
  componentDidMount(){
    // console.log(this.props)

  }

  render(){
    return (
      <div>
        <h1>歌单</h1>
      </div>
    )
  }
}


export default withRouter(PlayList)

