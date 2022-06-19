import React, {Fragment} from 'react'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'


export default function App(){
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  )
}