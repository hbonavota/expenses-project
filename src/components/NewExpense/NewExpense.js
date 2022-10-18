import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const saveExpenseDataHandler = (enteredExpenseData) => {
    
    const expenseData = {
      ...enteredExpenseData,
      //It is a simple demo to generate id, it is not a good practice
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);

  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense;

