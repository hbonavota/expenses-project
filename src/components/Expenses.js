import ExpenseItem from "./ExpenseItem";

import './Expenses.css'

export default function Expenses(props) {

  return (
    <div className="expenses">
      {props.items.map(e =>
        <>
          <ExpenseItem
            title={e.title}
            amount={e.amount}
            date={e.date}
          />
        </>
      )}
    </div>
  )
}
