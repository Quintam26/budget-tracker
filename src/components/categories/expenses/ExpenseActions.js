import { EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_REMOVE } from './ExpenseReducers';
import shortid from 'shortid';


export const add = expense => {
  expense.id = shortid.generate();
  expense.timestamp = new Date();
  return {
    type: EXPENSE_ADD,
    payload: expense
  };
};

export const update = expense => ({
  type: EXPENSE_UPDATE,
  payload: expense
});

export const remove = (id) => ({
  type: EXPENSE_REMOVE,
  payload: id
});
