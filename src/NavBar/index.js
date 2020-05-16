import React, {Component} from 'react'


export default class NavBar extends Component{
	constructor(props){
		super()
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
	              <span className="nav-fake-links">Logout</span> 
	            </nav>
	            
          	</div>
		)
	}
}