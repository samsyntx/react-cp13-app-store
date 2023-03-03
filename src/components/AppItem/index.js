import './index.css'

const AppItem = props => {
  const {appsDetails} = props
  const {appName, imageUrl} = appsDetails
  return (
    <li className="each-app-container">
      <img className="application-logo" src={imageUrl} alt={appName} />
      <p className="application-title">{appName}</p>
    </li>
  )
}

export default AppItem
