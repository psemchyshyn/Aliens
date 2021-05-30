import {Card, Col, Row, Button, OverlayTrigger, Popover} from "react-bootstrap"
import {useEffect, useState} from "react"
import {getExperiment} from "../../../../services/experiment"
import "./styles.css"

const Spaceship = ({name, exps, ships}) => {
    let [people, setPeople] = useState([])

    useEffect(() => {
        Promise.all(exps.map(id => getExperiment(id))).then(
            experiments => {
                setPeople(experiments.map(ex => ex.human_id))
                console.log("IN ship", experiments.map(ex => ex.human_id))
            }
        )
    }, [])

    const getPopover = (ships) => {
        return (
            <Popover >
                <Popover.Title as="h3">Commute to</Popover.Title>
                <Popover.Content>
                    {
                    ships.map(ship => (
                        <div className="to">{ship.name}</div>
                    ))
                    }
                </Popover.Content>
            </Popover>
        )
    }       

    return (
        <Card border="primary">
        <Card.Header>
            {name}
        </Card.Header>
        <Card.Body>
            <Row>
                {
                    people.map(human => (
                        <OverlayTrigger trigger="click" placement="right" overlay={getPopover(ships.filter(ship => ship.name !== name))}>
                        <div className="onboard">
                            {human}
                        </div>
                        </OverlayTrigger>
                    ))

                }
            </Row>
            <Row className="border-top align-items-center">
                <Col>
                    <Button variant="outline-danger mt-2">Escape</Button>
                </Col>
            </Row>    
        </Card.Body>   
    </Card>
    )
}

export default Spaceship;