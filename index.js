const Notification = props => {
  //  Write your code here.
  {text, bg-colors} = props
  <div className = {bg-colors}>
      <img src = "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" className = "images"/>
      <p className = "Paragraph">{text}</p>
  </div>
}

const element = (
  //  Write your code here.   
  <div className = "shadow bg-container">
  <h1 className = "heading">Notifications</h1>
  <Notification text = "Information Message" className = "color1"/>
  <Notification text = "Success Message" className = "color2"/>
  <Notification text = "Warning Message" className = "color3"/>
  <Notification text = "Error Message" className = "color4"/>


  </div>
)

ReactDOM.render(element, document.getElementById('root'))
