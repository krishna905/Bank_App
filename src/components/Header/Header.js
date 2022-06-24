import React from "react";
import "./Header.css"
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbarr from './SideMenu/SidebarNav'
export default class Header extends React.Component {
    state = {
        toggle: false
    }
    Toggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }
    render() {
        return (
            <>
                <div className="navBar">
                    <button className="butt" onClick={this.Toggle}>
                        <FaAlignRight />
                    </button>
                   


                    <nav class="navbar navbar-expand-sm navbar-dark ">
                    <Navbarr/> &nbsp;&nbsp;
                      <br/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1kc4ysNlaaDEz3FkqIdly8o8gOQjKhzlUMw&usqp=CAU.jpg" width="6%"/>
	  <div class="container-fluid">
	
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		  <span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
      
		  <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
			<li class="nav-item">
			  <a class="nav-link active" aria-current="page" href="/home"><i class="fas fa-home"></i> Home</a>
			</li>
			<li class="nav-item">
			  <a class="nav-link  active" href="/users" ><i class="fa fa-user " >  </i> AllUsers</a>
			</li>
            <li class="nav-item">
			  <a class="nav-link active" href="/transactions"><i class="fa fa-credit-card"></i> Transactions</a>
			</li>
      <li class="nav-item">
			  <a class="nav-link  active" href="/viewtransaction" ><i class="fas fa-pencil-alt"></i> Pending Transaction </a>
			</li>
            <li class="nav-item">
			  <a class="nav-link active" href="/newUsers"><i class="fas fa-user-clock"></i> NewUsers</a>
			</li>
            <li class="nav-item">
			  <a class="nav-link active" href="/logout"><i class="fa fa-sign-out"></i> Logout</a>
			</li>
            
		    <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 More
              </a>
				<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
				<li><a class="dropdown-item" href="/helpcentre">Help Centre</a></li>
				<li><a class="dropdown-item" href="/about">About us</a></li>
				<li><hr class="dropdown-divider"/></li>
				<li><a class="dropdown-item" href="/contactus">Contact us</a></li>
			  </ul>
            </li>          
          </ul>
		</div>
	  </div>
	</nav>
                    {/*<ul className={this.state.toggle ? "links show-nav" : "links"}>
                        <img src="https://www.nfcw.com/wp-content/uploads/2020/06/axis-bank-logo.jpg" width="6%"/>


                        <li className="nav-item " ><Link to="/home" className="nav-link"><i class="fas fa-home"></i> Home</Link></li>
                        <li className="nav-item " ><Link to="/users" className="nav-link"><i class="fa fa-user " >  </i> AllUsers</Link></li>
                        <li className="nav-item "><Link to="/transactions" className="nav-link"><i class="fa fa-credit-card"></i> Transactions</Link></li>
                        <li className="nav-item "><Link to="/newUsers" className="nav-link"><i class="fa fa-user " >  </i> NewUsers</Link></li>
                        <li className="nav-item "><Link to="/logout" className="nav-link"><i class="fa fa-sign-out"></i> Logout</Link></li>
                             </ul>
        */}
     

                </div>

            </>
        );
    }
}