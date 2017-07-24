import React from 'react';
// import components here
import Cards from './components/cards/index';
import Header from './components/header/index';
import Footer from './components/footer/index';

const App = () => {
  return(
    <div style={style.container}>
      <div style={style.main}>
        <Header />
        <Cards />
      </div>
      <Footer />
    </div>
  )
}

const style = {
  container:{
    display:'flex',
    flexDirection:'column',
    minHeight:'100vh'
  },
  main:{
    flex: 1
  }
}

export default App
