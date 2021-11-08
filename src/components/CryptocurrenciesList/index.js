import './index.css'
import {Component} from 'react'

import CryptoCurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  render() {
    const {currencyList} = this.props
    return (
      <div className="cuu-container">
        <div className="item-heading-pro">
          <p>Coin Type</p>
          <div className="value-pro">
            <p>USD</p>
            <p>EURO</p>
          </div>
        </div>
        <ul className="unorder-list">
          {currencyList.map(eachItem => (
            <CryptoCurrencyItem eachItem={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default CryptocurrenciesList
