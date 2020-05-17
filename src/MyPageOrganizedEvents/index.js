import React from 'react'
// import ReactModal from 'react-modal';

export default function MyOrganizedEvents(props){
	const events = props.MyOrganizedEvents.map(event => {
		return(
			<React.Fragment key={event.id}>
				<h2>{event.name}</h2>
				<h4>{event.date_day} {event.date_time}</h4>
				<h4><span>{event.city},{event.state}</span></h4>
				
			</React.Fragment>
		)
	})
	console.log("MyOrganizedEvents(props)",props.MyOrganizedEvents)
	return(

		<React.Fragment>
			<h2>My Organized Events</h2>
			
			{events}
			
		</React.Fragment>
	)
	
}