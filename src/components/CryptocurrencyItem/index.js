import './index.css'

const CryptoCurrencyItem = props => {
  const {eachItem} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = eachItem
  return (
    <li className="item-pro">
      <div className="logo-name-pro">
        <img src={currencyLogo} alt={currencyName} className="currency-image" />
        <p>{currencyName}</p>
      </div>
      <div className="value-pro">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptoCurrencyItem
