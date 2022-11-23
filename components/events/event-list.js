import EventItem from "./event-item"

import classes from './event-list.module.css'

function EventList(props){
    const {items} = props
    return <ul className={classes.list}>
        {items.map(eventItem => <EventItem key={eventItem.id} {...eventItem} />)}
    </ul>
}

export default EventList