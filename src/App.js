import React, {Component} from 'react'
import './App.css';
import EventContainer from './EventContainer/index.js'
// import LoginRegisterForm from './LoginRegisterForm/index.js'
import NavBar from './NavBar/index.js'

// import { render } from "react-dom";
import 'react-responsive-modal/styles.css';
// import { Modal } from 'react-responsive-modal';



export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      events: [],
      username:"",
      email:"",
      password:"",
      state:"",
      city:"",
      picture:"http://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png",
      loggedIn: false,
      loggedInUsername: '',
      showLogin: true,
      showRegister: false,
    }
  }

  // onOpenModal = () => {
  //   this.setState({loggedIn:false})
  // }

  // onCloseModal = () => {this.setState({loggedIn:true})}

  // setEvents(eventsArr){
  //   this.setState({
  //       events:eventsArr
  //     })
  // }

  switchFormToLogin = () => {
    this.setState({
      showLogin: true,
      showRegister: false,
    })
  }

  switchFormToRegister = () => {
    this.setState({
      showLogin: false,
      showRegister: true,
    })
  }

  handleSubmit = (event)=>{
    event.preventDefault()
    console.log(event)
    if(this.state.showLogin){
      this.login({
        email:this.state.email,
        password:this.state.password,
      })
    }
    if(this.state.showRegister){
      this.register({
        email:this.state.email,
        username:this.state.username,
        password:this.state.password,
        city:this.state.city,
        state:this.state.state,
        picture:this.state.picture,
      })
    }
  }

  handleChange =(event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  // registerFormSubmit =()=>{

  // }

  // loginFormSubmit =()=>{
    
  // }

  componentDidMount(){
    this.getEvents()
  }

  getEvents = async () => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/events/"
      const eventsResponse = await fetch(url)
      console.log("eventsResponse",eventsResponse)
      const eventsJson = await eventsResponse.json()
      console.log("eventsJson",eventsJson)
      console.log(eventsJson.data)

      this.setState({
        events:eventsJson.data
      })
      
    }
    catch(err){
      console.error("error getting events",err)
    }
  }

  register = async (registerInfo) => {
    const url = process.env.REACT_APP_API_URL + "/api/v1/users/register";
    try{
      const registerResponse = await fetch(url, {
        credentials:'include',
        method:"POST",
        body:JSON.stringify(registerInfo),
        headers: {
          'Content-Type':'application/json'
        }
      })
      const registerJson = await registerResponse.json()
      console.log("registerJson",registerJson)
      if(registerResponse.status === 201){
        this.setState({
          loggedIn:true,
          loggedInUsername: registerJson.data.username
        })
      }
    }catch(err){
      console.error("error trying to register w/ api", err)
    }
  }

  login = async (loginInfo) => {
    // console.log("login() called in app.js <=",loginInfo)
    const url = process.env.REACT_APP_API_URL + '/api/v1/users/login'
    try{
      const loginResponse = await fetch(url,{
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(loginInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      // console.log("loginResponse",loginResponse)
      const loginJson = await loginResponse.json()
      // console.log("loginJson",loginJson)

      if(loginResponse.status === 200){
        this.setState({
          loggedIn: true,
          loggedInUsername: loginJson.data.username
        })
      }
    } catch(err){
      console.error("error trying to login, app.js",err)
    }
  }

  logout = async () => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/creators/logout"
      const logoutResponse = await fetch(url, {
        credentials: 'include'
      })
      console.log("logoutResponse",logoutResponse)
      const logoutJson = await logoutResponse.json()
      console.log("logoutJson",logoutJson)

      if(logoutResponse.status === 200){
        this.setState({
          loggedIn: false,
          loggedInUsername: ''
        })
      }
    }catch(err){
      console.error("error logging out user",err)
    }
  }

  
  render(){
    console.log("process.env",process.env)
    console.log('this.state.events',this.state.events)
    return (
      <div className="TheApp">
        <header>
          <h1>HOBBY CROWD</h1>
        </header>
        {

          (this.loggedIn)
          ?
          <React.Fragmant>
            <NavBar />
            <h3>EventContainer</h3>
            <EventContainer 
              allEvents={this.state.events} 
            />
          </React.Fragmant>
          :
          <div>
            <div className="div-login-register-switch"> 
              <div 
                className="div-loginbutton"
                onClick={this.switchFormToLogin}
              >
                Login
              </div> 
              <div 
                className="div-loginbutton"
                onClick={this.switchFormToRegister}
              >
                Register
              </div> 
            </div>
            {
              this.state.showLogin
              &&
              <div>
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Email Address : 
                    <input 
                      type="text" 
                      name="email"
                      placeholder="Enter Email Address"
                      onChange={this.handleChange}
                      value={this.state.email}
                    />
                  </label>
                  <label>
                    Password : 
                    <input 
                      type="password" 
                      name="password"
                      placeholder="Enter Password"
                      onChange={this.handleChange}
                      value={this.state.password}
                    />
                  </label>
                  <button>Login</button>
                </form>
                
              </div>
            }
            {
              this.state.showRegister
              &&
              <div>
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Email Address : 
                    <input 
                      type="text" 
                      name="email"
                      placeholder="Enter email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </label>
                  <label>
                    Username : 
                    <input 
                      type="text" 
                      name="username"
                      placeholder="Enter username"
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                  </label>
                  <label>
                    Password : 
                    <input 
                      type="password" 
                      name="password"
                      placeholder="Enter password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </label>
                  <label>
                    State you live in : 
                    <input 
                      type="text" 
                      name="state"
                      placeholder="Enter state name"
                      value={this.state.state}
                      onChange={this.handleChange}
                    />
                  </label>
                  <label>
                    City you live in : 
                    <input 
                      type="text" 
                      name="city"
                      placeholder="Enter city name"
                      value={this.state.city}
                      onChange={this.handleChange}
                    />
                  </label>
                  <label>
                    Photo Url for Profile picture : 
                    <input 
                      type="text" 
                      name="picture"
                      placeholder="Enter Url"
                      value={this.state.picture}
                      onChange={this.handleChange}
                    />
                  </label>
                  <button
                    type="Submit"
                  >
                    Submit Registration
                  </button>
                </form>
              </div>
            }


          </div>
        }
      </div>
    );
  }
}


          // <LoginRegisterForm 
          //   login={this.login}
          //   register={this.register}
          // />
