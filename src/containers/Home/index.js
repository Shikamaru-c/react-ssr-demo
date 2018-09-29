import React from 'react'
import { connect } from 'react-redux'
import { getHomeList } from './store/actions'

class Home extends React.Component {
  handleClick () {
    console.log('hello, world!')
  }

  getList () {
    const { list } = this.props
    return list.map(news => <div key={news.id}>{news.title}</div>)
  }
  render () {
    return (
      <div>
        <div onClick={this.handleClick}>Home page test.</div>
        {this.getList()}
      </div>
    )
  }

  componentDidMount () {
    // this.props.getHomeList()
  }
}

Home.loadData = (store) => {
  // 在服务器端渲染之前，将该路由需要的数据加载完毕
  return store.dispatch(getHomeList())
}

function mapStateToProps (state) {
  return {
    list: state.home.newsList,
    name: state.home.name
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getHomeList () {
      dispatch(getHomeList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)