import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App(props) {

  const expenses = [
    {
      id: 'e1',
      title: 'Alquiler',
      amount: 300.00,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'Estudios', amount: 300.00, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Luz',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'Agua',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = expense => {
    console.log(expense)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>

  );
}


export default App;
