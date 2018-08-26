import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseDisplay from './ExpenseDisplay';
import ExpenseForm from './ExpenseForm';
import { update } from '../actions';

class Expense extends Component {

  state = {
    editing: false
  };

  static propTypes = {
    expense: PropTypes.object.isRequired,
    update: PropTypes.func.isRequired,
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleComplete = expense => {
    const { update } = this.props;
    update(expense);
    this.handleEndEdit();
  };

  handleEndEdit = () => {
    this.setState({ editing: false });
  };

  render() {
    const { editing } = this.state;
    const { expense } = this.props;
    const { categoryId } = expense;

    return (
      <li>
        {editing
          ? <ExpenseForm
            expense={expense}
            onComplete={this.handleComplete}
            onCancel={this.handleEndEdit}
            categoryId={categoryId}
          />
          : <ExpenseDisplay
            expense={expense}
            onEdit={this.handleEdit}
            onDelete={this.handleDelete}
          />  
        }
      </li>
    );
  }
}

export default connect(
  null, 
  { update }
)(Expense);