import React,{Component} from 'react'
import MyOrganizedEvents from '../MyPageOrganizedEvents/index.js'

export default class MyPageContainer extends Component{
	constructor(props){

		super(props)
		this.state={

		}
	}
	openModal=()=>{
		console.log("openModal() in MyPageContainer")
	}
	
	render(){
		console.log("my pg cont props check",this.props.myOrganizedEvents)
		return (
			<React.Fragment>
				<button
					onClick={this.openModal}
				>Post a New Event
				</button>

				<MyOrganizedEvents 
					MyOrganizedEvents={this.props.myOrganizedEvents}
				/>
			</React.Fragment>
		)
	}
}