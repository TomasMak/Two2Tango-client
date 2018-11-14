import React, { Component } from 'react'
import { connect } from 'react-redux';


class Messages extends Component {
  render() {
    return (
      <div className="container">
        {this.props.messages.map(message => (
            <div className="center-block list-style" key={message.id}>
              <div className="container">
                <h6>
                  <div >
                  <small>
                    <span className="poster-left">{message.poster}</span>
                    <span className="time-right">{message.time}</span>
                  </small>
                  </div>

                </h6>
                <div className="row message-text poster-messages">{message.content}</div>
              </div>
            </div>
          ))}
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    currentUser: state.currentUser,
    messages: state.messages,
    chatId: state.chatId
  };
};
export default connect(
  mapStateToProps,
)(Messages);

