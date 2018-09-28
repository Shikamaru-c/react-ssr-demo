import React from 'react'
import Header from '../../components/Header'

class Home extends React.Component {
  handleClick () {
    console.log('hello, world!')
  }
  render () {
    return (
      <div>
        <Header />
        <div onClick={this.handleClick}>Home page test.</div>
      </div>
    )
  }
}

export default Home