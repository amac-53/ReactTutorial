import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'
import { createStore } from 'redux'

const App = () => (
  <div className="container text-center mt-5">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/:id" element={<Blog />}></Route>
        <Route path="/sum/:num1/:num2" element={<Sum />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
)

const vote = (state=0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1
    default:
      return state
  }
}

const store = createStore(vote);

const Home = () => {
  store.dispatch({type: 'ADD'})
  const x = store.getState()

  return (
    <div>
      <h1>Welcome</h1>
      <p>投票数：{x}</p>
      <p><Link to="/about">About</Link></p>
    </div>
  )
}

const About = () => {
  store.dispatch({type: 'ADD'})
  const x = store.getState()
  return (
    <div>
      <h1>About</h1>
      <p>投票数：{x}</p>
    </div>
  )
}

const Blog = () => {
  const { id } = useParams();

  return (
    <div>
      <p>{id}番目の記事です</p>
    </div>
  )
}

const Sum = () => {
  const { num1, num2 } = useParams();
  return (
    <div>
      <p>{num1} + {num2} = {parseInt(num1) + parseInt(num2)}</p>
    </div>
  )
}

export default App