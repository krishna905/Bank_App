import React from "react";
import "./Tophomee.css"
import { FaAlignRight } from 'react-icons/fa';

//import Navbarr from './SideMenu/SidebarNav'
export default class Top12 extends React.Component {
    state = {
        toggle: false
    }
    Toggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }
    render() {
        return (
            <>
                <div className="navBar top123">
                    <button className="butt" onClick={this.Toggle}>
                        <FaAlignRight />
                    </button>
                   


                    <nav class="navbar navbar-expand-sm navbar-dark ">
                    
                      <br/>
                   
	  <div class="container-fluid">
	
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		  <span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
      
		  <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
			<li class="nav-item">
			 <h3> Sign in as</h3>
			</li>
			<li class="nav-item">
			  <a class="nav-link  active" href="/adminlogin" ><i class="fas fa-user-shield"></i> Admin</a>
			</li>
           
            <li class="nav-item">
			  <a class="nav-link active" href="/userlogin"><i class="far fa-user"></i> User</a>
			</li>
      <form class="form-inline my-2 my-lg-0  form123">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-warning my-5 my-sm-0" type="submit">Search</button>
    </form>

    <li class="nav-item backsym">
			  <a class="nav-link  active" href="/" ><i class="fas fa-arrow-circle-left"></i></a>
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