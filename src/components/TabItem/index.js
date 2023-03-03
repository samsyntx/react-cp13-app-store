import './index.css'

const TabItem = props => {
  const {tabDetail, changeTabUIFunction, isActiveTab} = props
  const {tabId, displayText} = tabDetail

  const changeTabItem = () => {
    changeTabUIFunction(tabId)
  }

  const ifTabActiveCSS = isActiveTab ? `style-for-active-tab` : ''

  return (
    <li>
      <button
        type="button"
        className={`each-tab-button ${ifTabActiveCSS}`}
        onClick={changeTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
