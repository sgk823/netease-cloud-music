import React, { useState } from "react";
import img from '../../assets/img/platform.png'
import { Form, Input, Select, Tooltip, Button, Space, Typography } from 'antd';
import './login.less';

const { Option } = Select

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }} value='86'>
      <Option value="86">+86</Option>
      <Option value="87">+87</Option>
    </Select>
  </Form.Item>
)

function Login(props) {
  const [state, setState] = useState({ title: '登录', type:'验证码' })


  const onRegister = (ev) => {
    setState({ title: '手机号注册' })

  }

  const onLogin = (ev) => {
    setState({title: '手机号登录'})
  }

  const goRegister = (ev)=>{
    ev.preventDefault()
    setState({title:'手机号注册'})
  }

  const goLogin = (ev) => {
    ev.preventDefault()

    setState({ title: '登录' })
  }

  const loginByPwd = (ev)=>{
    ev.preventDefault()
    setState({type:'密码'})
  }

  return (
    <div id="login">
      <div><span>{state.title}</span><i>×</i></div>

      <div style={{ display: state.title === '登录' ? 'block' : 'none' }}>
        <div>
          <img src={img} alt="" />
          <p>
            <Button type="primary" shape="round" size='large' onClick={onLogin}>手机号登录</Button>
          </p>
          <p>
            <Button type="ghost" shape="round" size='large' onClick={onRegister}>注册</Button>
          </p>
          <p>
            <input type="checkbox" /><span>同意</span>
            <a href="">《服务条款》</a><a href="">《隐私政策》</a><a href="">《儿童隐私政策》</a>
          </p>
        </div>
        <div></div>
      </div>

      <div style={{ display: state.title === '手机号注册' ? 'block' : 'none' }}>
        <div>
          <Form name="complex-form" onFinish={() => { }}>
            <Form.Item
              name="phone"
              rules={[]}
            >
              <label>手机号:</label>
              <Input addonBefore={prefixSelector} style={{ width: '100%', marginTop: '6px' }} placeholder='请输入手机号' />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[]}
            >
              <label htmlFor="">密码:</label>
              <Input.Password placeholder="设置登录密码, 不少于8位" style={{ marginTop: '6px' }} />
            </Form.Item>

            <Form.Item label="" colon={false}>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }} disabled>下一步</Button>
            </Form.Item>
          </Form>
        </div>
        <div><a href="" onClick={goLogin}>&lt;&nbsp;&nbsp;返回登录</a></div>
      </div>

      <div style={{ display: state.title === '手机号登录' ? 'block' : 'none' }}>
        <div>
          <Form name="complex-form" onFinish={() => { }}>
            <Form.Item
              name="phone"
              rules={[]}
            >
              <Input addonBefore={prefixSelector} style={{ width: '100%', marginTop: '6px' }} placeholder='请输入手机号' />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[]}
            >
              <Input placeholder="请输入验证码" style={{ marginTop: '6px', width: '60%'}}/>
              <Button style={{width: '36%', paddingLeft: '9px', marginLeft:'4%'}}>获取验证码</Button>
            </Form.Item>
{/* 
            <Form.Item
              name="password"
              rules={[]}
            >
              <Input.Password placeholder="请输入密码" style={{width:'100%'}} />
            </Form.Item> */}

            <Form.Item
              name="password"
              rules={[]}
              style={{}}
            >
              <a href="" onClick={loginByPwd}>密码登录</a><span style={{float:'right'}}><input type="checkbox" style={{verticalAlign:'-2px'}}/>自动登录</span>
            </Form.Item>

            <Form.Item label="" colon={false}>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }} disabled>登录</Button>
            </Form.Item>
          </Form>
        </div>
        <div>
          <a href="" onClick={goLogin}>&lt;&nbsp;&nbsp;其他登录方式</a>
          <a href="" onClick={goRegister}>没有账号? 免费注册&nbsp;&nbsp;&gt;</a>
        </div>
      </div>
    </div>
  )
}

export default Login;

