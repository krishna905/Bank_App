import React from 'react';
import {Line} from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May', 'June', 'July', 'August', 'September', 'October'],
  datasets: [
    {
      label: 'Transactions',
      fill: false,
      lineTension: 0.7,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [59, 62, 78, 62, 85,87,75, 60, 70, 75]
    }
  ]
}

export default class Graph extends React.Component {
  render() {
    return (
      <div className="container">
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Transactions per month  ',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}
