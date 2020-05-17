import React, {Component} from 'react'


export default class NavBar extends Component{
	constructor(props){
		super(props)
		this.state={

		}
	}
	render(){
		return(
			<div className="navbar">
	            <nav>
	              <span className="nav-fake-links">Events</span> | 
	              <span className="nav-fake-links">My Page</span> | 
	              <span className="nav-fake-links">Settings</span> | 
	              <span 
	              	className="nav-fake-links"
	              	onClick={this.props.logout}
	              >
	              	Logout
	              </span> 
	            </nav>
	            
          	</div>
		)
	}
}