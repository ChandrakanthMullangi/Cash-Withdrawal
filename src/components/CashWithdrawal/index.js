// Write your code here

import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {availableMoney: 2000}

  withdraw = value => {
    this.setState(prevState => ({
      availableMoney: prevState.availableMoney - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {availableMoney} = this.state
    return (
      <div className="bg-container">
        <div className="user-container">
          <div className="customer-container">
            <div className="profile"> s </div>
            <p className="name"> Sarah Williams </p>
          </div>
          <div className="balance-container">
            <p className="balance"> Your Balance </p>
            <p className="amount"> {availableMoney} </p>
          </div>
          <p className="currency"> In Rupees </p>
          <p className="withdraw-heading"> Withdraw </p>
          <p className="description"> CHOOSE SUM (IN RUPEES) </p>
          <ul className="denomination-container">
            {denominationsList.map(eachObj => (
              <DenominationItem
                key={eachObj.id}
                value={eachObj.value}
                withdraw={this.withdraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
