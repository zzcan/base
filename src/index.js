import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import { request } from './common';
import App from './app';
import './index.less';

function Index() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `title${(Math.random() * 10).toFixed()}`
  })
  return (
    <>
      <div onClick={request}>{count}</div>
      <button onClick={() => {console.log(1);setCount(count + 1)}} >+</button>
      <button onClick={() => setCount(count - 1)} >-</button>
      <App />
    </>
  )
}

ReactDom.render(<Index />, document.getElementById('root'));