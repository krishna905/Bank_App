import React from "react";
import axios from 'axios'
import Header from "../Header/Header";
import "./table.css"
import Footeruu from "../Design/FooterUi";
//import Chart from "../../Charts/Chart";
//import Chart from "../../../../krishna/src/Charts/Chart";
//import Chart from "../Charts/Chart";
import Chart from "../../Charts/Chart";
//import Chart from "../Chart/Chart"

export default class Transactions extends React.Component {
    state = {
        Trans: []
    }
    componentDidMount() {
        axios.get(`http://localhost:8081/api/gettransaction`)
            .then(res => {
                const Trans = res.data.transaction;
                this.setState({ Trans });
            })
    }
    render() {
        return (
            <div>

                <Header />
                <br />
                <div className="container">
                    <h1><center>All Transactions Data</center></h1><br />
                    <table className="table table-striped">
                        <thead className="header">
                            <tr>
                                <td>TId</td>
                                <td>Name</td>
                                <td>Amount</td>
                                <td>TDate</td>

                            </tr>
                        </thead>
                        <tbody>{this.state.Trans.map(function (item, key) {
                            return (
                                <tr key={key}>
                                    <td>{item.TId}</td>

                                    <td>{item.Name}</td>
                                    <td>{item.Amount}</td>

                                    <td>{item.TDate}</td>
                                </tr>
                            )
                        })}</tbody>
                    </table>
                </div>
            <Chart data={this.state.Trans}/>
               {/* <Chart data={this.state.Trans}/>*/}
                {/*<Chart data={this.state.Trans} />*/}
                <Footeruu />
            </div>
        )
    }
}