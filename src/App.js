import React, {Fragment} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


export default function App(){
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  )
}