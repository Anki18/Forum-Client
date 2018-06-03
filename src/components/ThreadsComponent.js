import React, { Component } from 'react';

class ThreadsComponent extends Component {
  constructor(props) {
    super(props)
    if (props.user.accessToken && !props.threads.threads.length) {
      props.fetchAllThreads(props.user.accessToken);
    }
  }
  render() {
    return (
      <div className="container">
        <h5 className="blue-text text-darken-2">All Questions</h5>
        <hr />
        {this.props.threads.threads.length > 0 ? (
          <ul >
            {
              this.props.threads.threads.map(function (thread) {
                return <div className="row" key={thread.id}>
                  <div className="col s12">
                    <div className="card blue-grey darken-1">
                      <div className="card-content white-text">
                        <span className="card-title">{thread.topic}</span>
                        <hr />
                        <span className="card-title">{thread.title}</span>
                        {thread.tags.map(function (tag) {
                          return <span key={tag} className="new badge" data-badge-caption="">{tag}</span>
                        })}
                        <p>{thread.content}</p>
                      </div>
                      <div className="card-action">
                        <a href="#">Reply</a>
                      </div>
                    </div>
                  </div>
                </div>
              })
            }
          </ul>
        ) : (<h5>No Threads Available</h5>)}

      </div>
    )
  }
}

export default ThreadsComponent;