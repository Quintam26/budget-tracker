import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove } from '../actions';

class ExpenseDisplay extends Component {

  static propTypes = {
    expense: PropTypes.object,
    onEdit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
  };

  render() {
    const { expense, onEdit } = this.props;

    return (
      <p>
        {expense.name} ${expense.price}
        <button name="Edit" onClick={onEdit}>✎</button> 
        <button name="Delete" onClick={() => remove(expense.key)}>🗑</button>
      </p>
    );
  }
}

export default connect(
  null, 
  { remove }
)(ExpenseDisplay);