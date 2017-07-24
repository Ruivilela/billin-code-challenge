import React from 'react';
// import components here
import Main from './router-components/main/index';
import Header from './components/header/index';
import Footer from './components/footer/index';

const App = () => {
  return(
    <div style={style.container}>
      <Header />
      <Main style={style.main}/>
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
