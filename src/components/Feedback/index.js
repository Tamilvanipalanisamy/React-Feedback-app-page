import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isEmojiClicked: true,
  }

  onThankYouPage = () => {
    this.setState(prevState => ({isEmojiClicked: false}))
  }

  renderEmojiContainer = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div>
        <h1 className="card-heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-container">
          {emojis.map(eachItem => (
            <li
              className="each-item"
              onClick={this.onThankYouPage}
              key={eachItem.id}
            >
              <img
                src={eachItem.imageUrl}
                alt={eachItem.name}
                className="emojis"
              />
              <p>{eachItem.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderSuccessContainer = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-you-container">
        <img src={loveEmojiUrl} alt="love emoji" className="emojis" />
        <h1 className="card-heading">Thank You!</h1>
        <p className="feedback">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isEmojiClicked} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          {isEmojiClicked
            ? this.renderEmojiContainer()
            : this.renderSuccessContainer()}
        </div>
      </div>
    )
  }
}

export default Feedback
