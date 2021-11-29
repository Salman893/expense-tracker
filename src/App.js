import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const Dummy_expenses = [
  {
    id: 'e1',
    date: new Date(2020, 5, 3),
    title: 'Paper',
    amount: 294
  },
  {
    id: 'e2',
    date: new Date(2019, 11, 8),
    title: 'Coil',
    amount: 78
  }
]

function App() {
  const [expenses, setExpenses] = useState(Dummy_expenses);
  const addNewExpenseToExpenseArrayHandler = expense => {
    setExpenses(prevExpenses => {
      return [...prevExpenses, expense]
    });
  }

  return (
    <div>
      <NewExpense onExpenseData={addNewExpenseToExpenseArrayHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;