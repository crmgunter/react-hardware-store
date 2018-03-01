import React, { Component } from 'react'
import Input from './styled-components/Input'
import Button from './styled-components/Button'

class TopContent extends Component {
  render () {
    return (
      <div>
        <h1>Less is More Hardware Store</h1>
        <div>Currently On Sale: {this.props.itemCurrentlyOnSale}!</div>
        <div>
          {this.props.editSaleItem
            ? <Input
              type="text" name="itemCurrentlyOnSale"
              value={this.props.itemCurrentlyOnSale}
              onChange={this.props.handleChange}
            />
            : null}
        </div>
        <Button onClick={this.props.toggleEditSaleItem}>
          { this.props.editSaleItem ? 'Hide' : 'Edit Sale Item' }
        </Button>
      </div>
    )
  }
}

export default TopContent
