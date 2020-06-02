import Container from "react-bootstrap/Container";
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Bar } from "react-chartjs-2";

function DataChart(props) {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  var income = [];
  var expenses = [];


  amounts.forEach(function (item) {
    if (item < 0) {
      expenses.push(item);
    } else {
      income.push(item);
    }
  });


  const totalexpenses = expenses
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const totalincome = income.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const data = {
    labels: ["Expenses", "Income", "Balance"],
    datasets: [
      {
        label: "Amount",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [totalexpenses, totalincome, total],
      },
    ],
  };

  return <Bar data={data} />;
}

export default DataChart;
