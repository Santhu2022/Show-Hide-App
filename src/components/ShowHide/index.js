import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    showFirstName: false,
    showLastName: false,
  }

  showHideFirstName = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }

  showHideLastName = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }

  getName = name => (
    <div className="name-container">
      <p className="name-text">{name}</p>
    </div>
  )

  render() {
    const {showFirstName, showLastName} = this.state
    return (
      <div className="main-container">
        <h1 className="app-heading">Show/Hide</h1>
        <div className="app-container">
          <div className="individual-conatiner">
            <button
              onClick={this.showHideFirstName}
              className="button"
              type="submit"
            >
              Show/Hide Firstname
            </button>
            {showFirstName ? this.getName('Joe') : null}
          </div>
          <div className="individual-conatiner">
            <button
              onClick={this.showHideLastName}
              className="button"
              type="submit"
            >
              Show/Hide Lastname
            </button>
            {showLastName ? this.getName('Jonas') : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
