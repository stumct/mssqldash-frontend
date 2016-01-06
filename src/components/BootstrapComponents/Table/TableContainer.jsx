import React from 'react';
import {connect} from 'react-redux';

class TableContainer extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <table className="table table-striped">
          <caption>Here we assign header information to cells by setting the scope attribute.
          </caption>
          <colgroup/>
          <colgroup span="2" title="title"/>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Side</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <td>Darth Vader</td>
              <td>Dark</td>
              <td>Sith</td>
            </tr>
          </tfoot>
          <tbody>
            <tr>
              <td>Obi Wan Kenobi</td>
              <td>Light</td>
              <td>Jedi</td>
            </tr>
            <tr>
              <td>Greedo</td>
              <td>South</td>
              <td>Scumbag</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect()(TableContainer);
