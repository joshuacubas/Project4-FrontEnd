import React, {Component} from 'react'


export default class LoginRegisterForm extends Component{
	constructor(){
		super()
		this.state = {
			email: "",
			username: "",
			password: "",
			action: 'Login'
		}

	}
	switchForm = () => {
		if(this.state.action === "Login"){
			this.setState({
				action: "Register"
			})
		}else{
			this.setState({
				action: "Login"
			})
		}
	}
	handleChange = (event) => {
		this.setState({
			// [event.target.name] : event.target.value
		})
	}
	handleSubmit = (event) => {
		event.preventDefault()
		if(this.state.action === "Register"){
			this.props.register(this.state)
		} else {
			this.props.login(this.state)
		}
	}
	render(){
		return(
			<React.Fragment>
				{
					this.state.action === 'Login'
					?
					<h2>Login</h2>
					:
					<h2>register</h2>
				}
			</React.Fragment>
		)
	}
}

				// <Form onSubmit={this.handleSubmit}>
				// 	{
				// 	this.state.action === "Register"
				// 	&&
				// 	<React.Fragment>
				// 		<Label>Username :</Label>
				// 		<Form.Input 
				// 			type="text"
				// 			name="username"
				// 			placeholder="Enter your username here"
				// 			value={this.state.username}
				// 			onChange={this.handleChange}
				// 		/>
				// 	</React.Fragment>
	
				// 	}
				// 	<Label>Email :</Label>
				// 	<Form.Input 
				// 		type="email"
				// 		name="email"
				// 		placeholder="Enter your email here"
				// 		value={this.state.email}
				// 		onChange={this.handleChange}
				// 	/>
				// 	<Label>Password :</Label>
				// 	<Form.Input 
				// 		type="password"
				// 		name="password"
				// 		placeholder="Enter your password here"
				// 		value={this.state.password}
				// 		onChange={this.handleChange}
				// 	/>
				// 	<Button type="Submit">
				// 		{this.state.action === "Login" ? "Log in" : "Sign up"}
				// 	</Button>
				// </Form>
				// {
				// 	this.state.action === "Login"
				// 	?
				// 	<p>
				// 		Need an Account? Register <span className="fake-link" onClick={this.switchForm}>here.</span>
				// 	</p>
				// 	:
				// 	<p>
				// 		Already registered? Login <span className="fake-link" onClick={this.switchForm}>here.</span>
				// 	</p>
				// }





