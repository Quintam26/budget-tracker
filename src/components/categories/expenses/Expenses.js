import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Expense from './Expense';
import ExpenseForm from './ExpenseForm';
import { getExpensesByCategory } from './ExpenseReducers';
import { add } from './ExpenseActions';

class Expenses extends Component {

  static propTypes = {
    expenses: PropTypes.array,
    categoryId: PropTypes.string,
    add: PropTypes.func
  };

  handleAddExpense = expense => {
    const { add, categoryId } = this.props;
    add(categoryId, expense);
  };

  render() {
    const { expenses, categoryId } = this.props;
    if(!expenses) return null;

    return (
      <div>
        <section>
          <h2>Expenses:</h2>
          <ExpenseForm onComplete={this.handleAddExpense} categoryId={categoryId}/>
        </section>
        
        <section>
          {expenses.map(expense => <Expense
            key={expense.id}
            expense={expense}
          />)}
        </section>     
      </div>
    );
  }
}

export default connect(
  (state, { categoryId }) => ({
    expenses: getExpensesByCategory(state, categoryId)
  }),
  { add }
)(Expenses);