import 'chart.js/auto'; 
import {  Doughnut } from 'react-chartjs-2';

const InvoiceChart = () => {
    const data = [
        {
            label:"عمولات",
            value:24,
            color:'rgb(255, 99, 132)',
        },
        {
            label:"نثريات",
            value:24,
            color:'rgb(54, 162, 235)',

        },
        {
            label:"رواتب",
            value:24,
            color:'rgb(255, 205, 86)',

        },
        {
            label:"ايجار",
            value:24,
            color:'rgb(255, 150, 70)',

        },

    ]
    return (
        <div className="invoice-chart">
            <Doughnut
                data = {{
                    labels: data.map((data) => data.label),
                    datasets: [{
                        label: 'My First Dataset',
                        data: data.map((data) => data.value),
                        backgroundColor: data.map((data) => data.color),
                        hoverOffset: 4
                        }]
                    }}
            />
        </div>
    )
}

export default InvoiceChart
