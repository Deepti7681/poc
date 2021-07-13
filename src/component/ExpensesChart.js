import React from 'react';
import Chart from './Chart';

const ExpensesChart=(props)=>{
    const chartDataPoints=[
        {
            label:'january', value:0
        },
        {
            label:'febuary', value:0
        },
        {
            label:'march', value:0
        }
    ];
    for(const expense of props.expenses){
        const expenseMonth=expense.date.getMonth();
        chartDataPoints[expenseMonth].value+=expense.amount;
    }
    return <Chart dataPoints={chartDataPoints}></Chart>
}
export default ExpensesChart;