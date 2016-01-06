import React from 'react'
import {connect} from 'react-redux'

const Panel = (props) => {
  const showHeading = props.showHeading || false;
  const showFooter = props.showFooter || false;
  const panelType = props.panelType || 'panel-default';
  const parentClasses = props.parentClasses || '';
  return (
    <div className={parentClasses}>
      <div className={'panel '+panelType}>
        {showHeading ?
          <div className = 'panel-heading'>
            <h3 className='panel-title'>{props.title}</h3>
          </div>
        : null}
        <div className='panel-body'>
          {props.children}
        </div>
          {showFooter ?
            <div className='panel-footer'>{props.footer}</div>
          : null}
      </div>
    </div>

  )
}

export default connect()(Panel);
