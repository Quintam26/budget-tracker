import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove } from './actions';
import Expenses from './expenses/Expenses';

class CategoryDisplay extends Component {

  static propTypes = {
    category: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
  };

  render() {
    const { category, onEdit, remove } = this.props;

    return (
      <div>
        <section className="cf-list">
          {category.name} has a budget of ${category.budget}
          <button name="Edit" onClick={onEdit}>✎</button> 
          <button name="Delete" onClick={() => remove(category.key)}>🗑</button>
          {/* <button name="Expense" onClick={onEdit}>💲</button>  */}
        </section>

        <section>
          <Expenses categoryId={category.id}/>
        </section>
      </div>
    );
  }
}

export default connect(
  null, 
  { remove }
)(CategoryDisplay);