import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux"
import store from '../redux/store';
import Home from "../components/Design/Home";

import AllUsers from "../components/Alluser/AllUsers";
import Transactions from "../components/transaction/Transactions";
import NewUsers from "../components/Createuser/NewUsers";
import NotFound from "../components/NotFound/NotFound";
import Login from "../components/Login/login";
import Logout from "../components/Logout/Logout";
import Register from "../components/Register/register";
import Dc from '../Cards/dc/dc'
import Dc1 from '../Cards/dc/dc1'
import UpdateUser  from "../components/Updateuser/UpdateUser";
import ViewUser from "../components/Singleuser/ViewUser";
import Balance from "../components/Singleuser/Balance";

import PBKS from '../Cards/pbks/pbks'
import Rcb from '../Cards/rcb/rcb'
import Csk from '../Cards/csk/csk'

import PBKS1 from '../Cards/pbks/pbks1'
import Rcb1 from '../Cards/rcb/rcb1'
import Csk1 from '../Cards/csk/csk1'
import About from "../components/Header/Dropdown/aboutUs";
import Help from "../components/Header/Dropdown/helpCenter";
import Cons from "../components/Header/Dropdown/contactUs";

import About1 from "../components/Header/Dropdown/aboutUs1";
import Help1 from "../components/Header/Dropdown/helpCenter1";
import Cons1 from "../components/Header/Dropdown/contactUs1";

import quer from "../components/Header/Dropdown/query";
import quer1 from "../components/Header/Dropdown/query1";

import Home1 from "../components/Design/Home1";
import App from '../components/Header/Dropdown/Otp/App1';
import SignIn1 from "../components/Header/Dropdown/Otp/SignIn";
import Home12 from "../components/Header/Dropdown/Otp/Home123";

import PTransaction from '../components/Pending/ptransactions'
import PendingTransaction from "../components/AllTransactions/Pendingtransactions"; 
import { AiFillMedicineBox } from "react-icons/ai";
import AdminLogin from '../components/Login/AdminLogin'
import userLogin from '../components/Login/userLogin'




export const Routing = (
    <Router>
        <div>

            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/users" >
                <Provider store={store}>
                 <AllUsers />
                 </Provider>

                </Route>
                <Route path="/home" component={Home} />
                <Route path="/home1" component={Home1} />
                <Route path="/view-user/:id" >
                <Provider store={store}>
                 <ViewUser />
                 </Provider>
                </Route>
                <Route path="/balance" >
                <Provider store={store}>
                 <Balance />
                 </Provider>
                </Route>
                <Route path="/edit-user/:id">
                <Provider store={store}>
                 <UpdateUser />
                 </Provider>

                 </Route>
               
                <Route path="/sendmoney">
                <Provider store={store}>
                 <PTransaction />
                 </Provider>
                  </Route>

               <Route path="/viewtransaction">
                <Provider store={store}>
                 <PendingTransaction />
                 </Provider>
                </Route>

                <Route path="/transactions" component={Transactions} />
                <Route path="/newUsers">
                <Provider store={store}>
                 <NewUsers />
                 </Provider>
</Route>
                
                <Route path="/logout" component={Logout} />
                <Route path="/register" component={Register} />
                <Route path="/Dc" exact component={Dc} />
                <Route path="/Rcb" exact component={Rcb} />
                <Route path="/Pbks" exact component={PBKS} />
                <Route path="/Csk" exact component={Csk} />

                <Route path="/Dc1" exact component={Dc1} />
                <Route path="/Rcb1" exact component={Rcb1} />
                <Route path="/Pbks1" exact component={PBKS1} />
                <Route path="/Csk1" exact component={Csk1} />


                <Route path="/about" component={About} />
                <Route path="/contactus" component={Cons} />
                <Route path="/helpcentre" component={Help} />
                <Route path='/quer' component={quer}/>
                <Route path='/quer1' component={quer1}/>
                
                <Route path='/home1' component={Home1}/>
                <Route path="/about1" component={About1} />
                <Route path="/contactus1" component={Cons1} />
                <Route path="/helpcentre1" component={Help1} />

                <Route path='/appp' component={App}/>
                <Route path="/signin1" exact component={SignIn1}/>
                <Route path='/apphome' component={Home12}/>
                <Route path='/adminlogin' component={AdminLogin}/>
                <Route path='/userlogin' component={userLogin}/>

                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)
