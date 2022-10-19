import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import './Expenses.css'
import ExpensesFilter from "../UI/ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onchange={filterChangeHandler} />
      {props.items.map(e =>
        <>
          <ExpenseItem
            title={e.title}
            amount={e.amount}
            date={e.date}
          />
        </>
      )}
    </Card>
  )
}

export default Expenses;