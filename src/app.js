import React, { useState } from 'react';
import { request } from './common'

function App1() {
  return (
    <>
      <div onClick={() => request('/file')}>哈哈哈</div>
    </>
  )
}

class App extends React.Component {
  componentDidMount() {
    console.log(1);
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    console.log('child render')
    return <div>gg</div>
  }
}

export default App;