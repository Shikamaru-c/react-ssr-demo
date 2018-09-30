import React from 'react'
import { connect } from 'react-redux'
import { getHomeList } from './store/actions'
import styles from './index.css'
import withStyle from '../../withStyle'

class Home extends React.Component {
  componentWillMount () {
    const { staticContext } = this.props
    staticContext && staticContext.css.push(styles._getCss())
  }

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

const ExportComponent = connect(mapStateToProps, mapDispatchToProps)(withStyle(Home, styles))

ExportComponent.loadData = store => {
  // 在服务器端渲染之前，将该路由需要的数据加载完毕
  return store.dispatch(getHomeList())
}

export default ExportComponent