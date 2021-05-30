import FilterEnemies from "../FilterEnemy/filter"
import {Table, Container, Row, Col, Button} from "react-bootstrap"
import {useSelector} from "react-redux"
import {useState, useEffect} from "react"
import { getHumans } from "../../../../services/human"
import { getAliens } from "../../../../services/alien"
import {getEscOrComm, getEx, getKillsOrAbd, enemyType} from "../../basic/enemy"

const Enemies = () => {
    let user = useSelector(state => state.user)
    const [enemies, setEnemies] = useState([])

    useEffect(() => {
        enemyType(user)["getEnemies"]().then(enemies => {
            setEnemies(enemies[enemyType(user)["enemyName"]])
            console.log("User is", user)
            // console.log("Enemies", enemies)
            })    
    }, [user])

    const updateEnemies = (values) => {
        setEnemies(values[enemyType(user)["enemyName"]])
    }

    return (
        <Container>
            <Row className="my-4">
                <Col sm={12} md="4">
                    <FilterEnemies user={user} update={(values) => updateEnemies(values)}></FilterEnemies>
                </Col>
                <Col sm={12} md="8">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Rating</th>
                                <th>{enemyType(user)['esc&comm']}</th>
                                <th>{enemyType(user)['kill&abd']}</th>
                                <th>{enemyType(user)['ex']}</th>
                                <th>-</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                enemies && enemies.map((enemy, ind) => (
                                    <tr className="">
                                        <td>{ind}</td>
                                        <td>{enemy.name}</td>
                                        <td>20</td>
                                        <td>{getEscOrComm(enemy).length}</td>
                                        <td>{getKillsOrAbd(enemy).length}</td>
                                        <td>{getEx(enemy).length}</td>
                                        <td><Button variant="danger">{enemyType(user)["action"]}</Button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default Enemies;