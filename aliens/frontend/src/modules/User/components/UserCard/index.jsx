import {Card, Row, Col, Container, Accordion, Badge} from "react-bootstrap";
import SpaceshipsCard from "../SpaceshipsCard/index";
import {useEffect, useState} from "react"
import {useParams, useLocation} from "react-router-dom"
import {getHuman} from "../../../../services/human"
import {getAlien} from "../../../../services/alien"

import "./styles.css"

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  

const UserCard = () => {
    let {userId} = useParams()
    let type = useQuery().get("type");
    let [user, setUser] = useState({});

    useEffect(() => {
        console.log("The type is", type)
        if (type === "'alien'") {
            getAlien(userId).then(user => {
                setUser({...user, isAlien: true})    
            })
        } else {
            getHuman(userId).then(user => {
                setUser({...user, isAlien: false})    
            })
        }
    }, [])

    const userType = () => {
        // to differentiate human and alien, change some ui stuff
        if (user.isAlien) {
            return {"color": "success", "race": "Alien", 'kill&abd': "Total abductions",
            'esc&comm': "Total commutations", 'ex': "Total experiments"}
        } else {
            return {"color": "danger", "race": "Human", 'kill&abd': "Total kills",
            'esc&comm': "Total escapes", 'ex': "Total excursions"}
        }
    }

    const getEscOrComm = () => {
        let result = user.isAlien ? user.commutations : user.escapes
        return result ? result : []
    }

    const getKillsOrAbd = () => {
        let result = user.isAlien ? user.abductions: user.killed
        return result ? result : []
    }

    const getEx = () => {
        let result = user.isAlien ? user.experiments : user.excursions
        return result ? result : []

    }

    const badge = {
        position: "absolute",
        top: "20px",
        left: "-20px",
        height: "50px",
        width: "50px"
    }
    return (
        <Container className="my-4">
            <Card border={userType()["color"]} className="mx-auto" style={{width: "80%"}}>
                <Row className="no-gutters position-relative">
                    <Col sm={12} md={6}>
                        <div style={badge}>
                            <Badge variant={userType()["color"]}>{userType()["race"]}</Badge>
                        </div>
                        <Card.Img src="https://nogivruki.ua/wp-content/uploads/2018/08/default-user-image.png" alt="imageplaceholder"/>
                    </Col>
                    <Col sm={12} md={6} className="px-2">
                        <Card.Title className="border-bottom">
                            <Row className="py-2 align-items-center">
                                <Col xs={9}>
                                    <div id="user-name">{user.name}</div>
                                </Col>
                                <Col xs={3} >
                                    <span id="user-rating">20</span>
                                    <span><i class="fas fa-star"></i></span>
                                </Col>
                            </Row>
                        </Card.Title>
                        <Accordion defaultActiveKey="0">
                                <Accordion.Toggle as={Card.Title} eventKey="0">
                                    <div className="stats">
                                        <div><i class="fas fa-caret-right"></i></div>
                                        <div>{userType()['esc&comm']}: </div>
                                        <div>{getEscOrComm().length}</div>   
                                    </div>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <div className="d-flex">
                                        {
                                            getEscOrComm().map(el => (
                                                <div className="stats-element">{el.id}</div>
                                            ))
                                        }
                                    </div>
                                </Accordion.Collapse>
                                <Accordion.Toggle as={Card.Title} eventKey="1">
                                    <div className="stats">
                                        <div><i class="fas fa-caret-right"></i></div>
                                        <div>{userType()['kill&abd']}:</div>
                                        <div>{getKillsOrAbd().length}</div>   
                                    </div>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <div className="d-flex">
                                        {
                                            getKillsOrAbd().map(el => (
                                                <div className="stats-element">
                                                    {el.id}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </Accordion.Collapse>
                                <Accordion.Toggle as={Card.Title} eventKey="2">
                                    <div className="stats">
                                        <div><i class="fas fa-caret-right"></i></div>
                                        <div>{userType()['ex']}:</div>
                                        <div>{getEx().length}</div>   
                                    </div>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                    <div className="d-flex">
                                            {
                                                getEx().map(el => (
                                                    <div className="stats-element">{el.id}</div>
                                                ))
                                            }
                                    </div>
                                </Accordion.Collapse>
                        </Accordion>
                        <SpaceshipsCard user={user}></SpaceshipsCard>
                    </Col>
                </Row>
            </Card>
        </Container>

)
}

export default UserCard;

