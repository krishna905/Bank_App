import React from "react";
import { Bar } from 'react-chartjs-2'
import "./Chart.css"
export default function Chart(data) {
    const Labels = data.data.map(e => e.Name)
    console.log(Labels)
    const dataVal = data.data.map(e => e.Amount)
    console.log(dataVal)
    const ChartData = {
        labels: Labels,
        datasets: [
            {
                label: "User Transaction",
                backgroundColor: 'rgb(0, 181, 187)',
                borderColor: 'black',
                borderWidth: 1,
                data: dataVal
            }
        ]
    }
    return (
        <div className="container1">
            <div className="chart" style={{ width: '90%', height: "400px", display: "inline-flex" }}>
                <Bar

                    options={{
                        maintainAspectRatio: false,

                        title: {
                            display: true,
                            text: 'User Transaction Amount',
                            fontSize: 25,

                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    fontSize: 15,
                                    color: 'green'
                                }
                            }],
                            xAxes: [{
                                ticks: {
                                    fontSize: 16,
                                    fontColor: 'blue'
                                }
                            }]
                        }
                    }
                    }
                    data={ChartData}
                >

                </Bar>

            </div>
        </div>
    )
}