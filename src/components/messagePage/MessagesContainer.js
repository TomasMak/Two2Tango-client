import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../../styling/MessagesContainer.css'

import { postMessage, resetMessages, resetChatId } from '../../actions/messages';
import Messages from './Messages';

class MessagesContainer extends Component {
  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = async chatId => {
    console.log(chatId);
    await this.props.postMessage(this.state.message, chatId);
  };

  componentWillUnmount(){
    this.props.resetMessages()
    this.props.resetChatId()
  }

  render() {
    if (!this.props.messages) return <Redirect to="/messages" />;
    return (
      <div className="container">
        <h2 className="text-center">Chat</h2>
        <div className="container chat-box">
          <div className="container chat-messages-box">
            <Messages/>
          </div>
          <div className="center-block fixed-bottom">
          <div className="container-fluid txtAreaBgrnd">
            <div className="row-12">
              <div className="col-xs-12">
                <div className="input-group container">
                  <input
                    type="text"
                    name="message"
                    onChange={this.handleChange}
                    className="form-control input-message"
                  />
                  <span className="input-group-btn">
                    <button
                      className="btn-lg btn-outline-light btn-send"
                      type="button"
                      onClick={() =>
                        this.handleSubmit(this.props.chatId)
                      }>
                      Send
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>

            
          </div>
        </div>
      </div>
    );
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
  { postMessage, resetMessages, resetChatId }
)(MessagesContainer);
