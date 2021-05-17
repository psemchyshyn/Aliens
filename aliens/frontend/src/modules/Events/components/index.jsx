import {Container, Row, Col} from "react-bootstrap"
import Event from "./event"
import {useState, useEffect} from "react"
import EventHandler from "./handler"
import PropTypes from 'prop-types';
import {getExcursions} from "../../../services/excursion"




const Events = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        if (true){ // user is human, change later
            console.log("Logged")
            getExcursions().then(excs => {
                setEvents([...excs["excursions"]])
            }
            )
        }
        else {
            // exps
        }
    }, [])

    return (
    <Container>
        <EventHandler></EventHandler>
        <Row>
            {
                events.map(event => (
                    <Col xs={12} md={4} lg={3} className="p-3">
                        <Event key={event.id} date={event.date} ship="not now" guide_id={event.guide.id} interested={event.participants} >
                        </Event>
                    </Col>
                ))
            }
        </Row>

    </Container>
    )
}

export default Events;