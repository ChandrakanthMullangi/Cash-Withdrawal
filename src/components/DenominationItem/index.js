// Write your code here
import './index.css'

const DenominationItem = props => {
  const {value, withdraw} = props

  const selectDenomination = () => {
    withdraw(value)
  }

  return (
    <li className="value">
      <button type="button" className="btn" onClick={selectDenomination}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
