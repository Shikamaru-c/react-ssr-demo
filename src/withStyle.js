import React, { Component } from 'react'

export default (DecoratedComponent, styles) => {
  return class NewComponent extends Component {
    componentWillMount () {
      const { staticContext } = this.props
      staticContext && staticContext.css.push(styles._getCss())
    }

    render () {
      return <DecoratedComponent {...this.props} />
    }
  }
}