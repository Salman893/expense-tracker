import React, {useState} from "react";
import Card from "../UI/Card";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const FilteredYearChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={filteredYear} onFilterChange={FilteredYearChangeHandler} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
