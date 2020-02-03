import React, { Component } from 'react';

class Message extends Component {
    render() {

        let allMessages = {
            isDark: 'is-dark',
            isPrimary: 'is-primary',
            isLink: 'is-link',
            isInfo: 'is-info',
            isSuccess: 'is-success',
            isWarning: 'is-warning',
            isDanger: 'is-danger',
          }

          const allClassessKeys = Object.keys(allMessages);
          let messageClass = 'message';

          allClassessKeys.forEach(classKey => {
              if (this.props[classKey]) {
                  messageClass += ' ' + allMessages[classKey];
              }
          });


        return (
            <article className={messageClass}>
                <div className="message-header">
        <p>{this.props.name}</p>
                    <button className="delete" aria-label="delete"></button>
                </div>
                <div className="message-body">
                    {this.props.children}
                </div>
            </article>
        );
    }
}

export default Message;