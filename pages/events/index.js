import { Fragment } from "react"
import {useRouter} from 'next/router'
import { getAllEvents, getFilteredEvents } from "../../dummy-data"
import EventList from '../../components/events/event-list.js'
import EventsSearch from "../../components/events/events-search"

function AllEventsPage(){
    const events = getAllEvents()
    const router = useRouter()
    
    const findEventsHandler = (year, month) => {
        const fullPath = `/events/${year}/${month}`

        router.push(fullPath)
    }

    return(
        <Fragment>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList items={events} />
        </Fragment>
    )
}

export default AllEventsPage