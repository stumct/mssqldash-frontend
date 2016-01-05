import './ContentContainer.less'
import React from 'react';
import {connect} from 'react-redux'

class ContentContainer extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="content-container">
        <div className="container-fluid">
          <div className="row">
            {this.props.children}
          </div>
        </div>
      </div>

    )
  }
}

export default connect()(ContentContainer);
