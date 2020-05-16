import React from 'react'
// import ReactModal from 'react-modal';

export default function EventContainer(props){
	const events = props.allEvents.map(event => {
		return(
			<React.Fragment key={event.id}>
				<h2>{event.name}</h2>
				<h4>{event.date_time} - <span>{event.city},{event.state}</span></h4>
				
			</React.Fragment>
		)
	})
	
	return(
		<React.Fragment>
			<h5>EventContainer</h5>
			{events}
		</React.Fragment>
	)
	
}