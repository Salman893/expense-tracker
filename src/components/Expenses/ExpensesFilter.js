import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = event => {
      props.onFilterChange(event.target.value);
  }

  return (
    <div className="filter-div">
      <label>Filter By Year</label>
      <select value={props.selectedYear} onChange={dropdownChangeHandler}>
        <option>2019</option>
        <option>2020</option>
        <option>2021</option>
        <option>2022</option>
      </select>
    </div>
  );
};

export default ExpensesFilter;
