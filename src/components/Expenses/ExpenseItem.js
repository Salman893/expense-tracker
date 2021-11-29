
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-title">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-price">${props.amount}</div>
    </Card>
  );
};

export default ExpenseItem;