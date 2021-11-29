import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
      return <h2>No Items Found</h2>
  }
  return (
    <div>
      <ul className="expense-list">
        {props.items.map((expense) => (
          <li key={expense.id}>
            <ExpenseItem
              id={expense.id}
              date={expense.date}
              title={expense.title}
              amount={expense.amount}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
