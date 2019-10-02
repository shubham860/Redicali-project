import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {addnew} from '../Actions/operations';

class Form_input extends React.Component {
  render () {
    return(
      <div>
        <input type='text' />
      </div>
    )
  }
}

export default Form_input;
