import React from 'react'
import Context from './Context'

export default class Button extends React.Component {
  componentDidMount() {
    console.log(this.props)
    console.log(this.context)
  }

  render() {
    const { name, age } = this.context
    return (
      <Context.Consumer>
        {({ udpateAge }) => (
          <button type="button" onClick={udpateAge}>{`${name} tem ${age} anos`}</button>
        )}
      </Context.Consumer>
    )
  }
}

Button.contextType = Context