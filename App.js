import Expenses from "./components/Expenses/Expenses";
import "./components/Expenses/ExpenseDate.css";
import NewExpense from "./components/NewExpenses/NewExpense";
import { useState } from "react/cjs/react.development";


function App() {
  const [expenses, setExpenses] = useState([]);

  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  function addFilterHandler(year) {}

  return (
    <div>
      <h1>Expense Evidence</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses onChangeYear={addFilterHandler} array={expenses} />
    </div>
  );
}

export default App;
