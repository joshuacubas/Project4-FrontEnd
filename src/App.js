import React, {Component} from 'react'
import './App.css';
import EventContainer from './EventContainer/index.js'
import ReactModal from 'react-modal';

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      events:[],
    }
  }
  setEvents(eventsArr){
    this.setState({
        events:eventsArr
      })
  }

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
  
  render(){
    console.log("process.env",process.env)
    console.log('this.state.events',this.state.events)
    return (
      <div className="TheApp">
        <header>
          <h1>HOBBY CROWD</h1>
          <nav>
            <span className="nav-fake-links">Events</span> | 
            <span className="nav-fake-links">My Page</span> | 
            <span className="nav-fake-links">Settings</span> | 
            <span className="nav-fake-links">Logout</span> 
          </nav>
        </header>
        <div>
          <h3>EventContainer</h3>
          <EventContainer 
            allEvents={this.state.events} 
          />
        </div>
      </div>
    );
  }
}


