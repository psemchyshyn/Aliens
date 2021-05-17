import {Card, Row, Col, Button} from "react-bootstrap";
import {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import {getHuman} from "../../../services/human"
import { getAlien } from "../../../services/alien";
import "./styles.css"

const Event = ({key, date, ship, guide_id, interested}) => {
    const [event, setEvent] = useState({interested:[]});

    useEffect(() => {
        getAlien(guide_id).then(guide => {
            Promise.all(interested.map(i => getHuman(i.id))).then(interested => {
                setEvent({...event, "interested": interested, "guide": guide.name})
            })
        })
    }, [])


    return (
        <Card border="dark">
            <Card.Header>
                Scheduled on: <span className="event-scheduled">{date}</span>
            </Card.Header>
            <Card.Body>
                <p className="border-bottom font-weight-bold">Ship: <span className="font-weight-normal">{ship}</span></p>
                <p className="border-bottom font-weight-bold">Guide: <span className="font-weight-normal">{event.guide}</span></p>
                <p className="font-weight-bold">Interested: </p>
                <Row>
                    {
                        event.interested.map(human => (
                            <div key={human.id} className="interested">
                                {human.name}
                            </div>
                        ))
                    }
                </Row>
                <Row className="border-top align-items-center">
                    <Col md="8">Wanna join?</Col>
                    <Col md="4">
                        <Button variant="outline-danger mt-2">Join</Button>
                    </Col>
                </Row>    
            </Card.Body>   
        </Card>
    )
}


Event.propTypes = {
    date: PropTypes.string,
    guide: PropTypes.object,
    interested: PropTypes.array,
    ship: PropTypes.string,
    user: PropTypes.object,
    key: PropTypes.number
  };

export default Event;