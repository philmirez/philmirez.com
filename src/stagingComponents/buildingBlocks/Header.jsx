import React, { PureComponent } from 'react'
import HeadroomContainer from 'buildingBlocks/HeadroomContainer'

export default class Header extends PureComponent {
  render () {
    return (
      <div style={{
        height: '6vh',
        width: '100vw'
      }}>
        <HeadroomContainer link={this.props.link}/>
      </div>
    )
  }
}