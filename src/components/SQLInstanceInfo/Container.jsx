import React from 'react';
import {connect} from 'react-redux';
import {getInstanceInfo} from '../../redux/actions/index.js'
import Panel from '../BootstrapComponents/Panel/Panel.jsx'

class SQLInstanceInfoContainer extends React.Component {
  constructor (props) {
    super(props)
  }
  componentWillMount () {
    this.props.dispatch(getInstanceInfo('LOCAL'));
    this.props.dispatch(getInstanceInfo('VSAW01'));
  }
  render () {
    const {sqlInstances} = this.props
    return (
      <div>This is a SQL Instance Info Container
        {Object.keys(sqlInstances).map(i => {
          let panelConfig = {
            showHeading: true,
            title: i,
            panelType: 'panel-default'
          }
          return (
            <Panel {...panelConfig}>
              <table className="table table-striped">
                <tbody>
                  {Object.keys(sqlInstances[i]).map(r => {
                    /*TODO fix this nasty string replacement hack*/
                    let value = JSON.stringify(sqlInstances[i][r]).replace('"', '').replace('"', '');
                    return (
                      <tr>
                        <td>{r}</td>
                        <td>{value}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </Panel>
          )
        })}

      </div>
    )
  }
}

function filterState(state) {
  return {sqlInstances: state.sqlInstances}
}

export default connect(filterState)(SQLInstanceInfoContainer);
