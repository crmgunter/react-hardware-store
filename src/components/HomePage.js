import React, { Component } from 'react'
import AdminView from './AdminView'
import ShopView from './ShopView'
import Button from './styled-components/Button'
import TopContent from './TopContent'

class HomePage extends Component {
  state = {
    itemCurrentlyOnSale: 'A Hammer!!',
    editSaleItem: false,
    adminView: false
  }

  toggleEditSaleItem = () => {
    this.setState({ editSaleItem: !this.state.editSaleItem })
  }

  handleChange = (event) => {
    this.setState({ itemCurrentlyOnSale: event.target.value })
  }

  toggleAdminView = () => {
    this.setState({ adminView: !this.state.adminView })
  }

  render () {
    return (
      <div>
        <TopContent
          itemCurrentlyOnSale={this.state.itemCurrentlyOnSale}
          editSaleItem={this.state.editSaleItem}
          handleChange={this.handleChange}
          toggleEditSaleItem={this.toggleEditSaleItem}
        />
        <br/>
        <Button onClick={this.toggleAdminView}>
          Toggle View
        </Button>
        {this.state.adminView ? <AdminView/> : <ShopView/>}
      </div>
    )
  }
}

export default HomePage

// Make sure input is tied to this.state.itemCurrentlyOnSale
// When we change the value on input, the state gets updated


// some conditional ? return when true : return when false