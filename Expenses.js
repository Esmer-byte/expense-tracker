import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react/cjs/react.development";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  function onChangeYearHandler(year) {
    setFilteredYear(year);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeYear={onChangeYearHandler}
        />
        {props.array.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
