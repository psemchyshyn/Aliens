import {useState, useEffect} from "react"
import {Form, Dropdown} from "react-bootstrap"
import {useForm, Controller} from "react-hook-form"
import { getHumans } from "../../../../services/human"
import { getAliens } from "../../../../services/alien"
import { userType, enemyType, getSecondWord } from "../../basic/enemy"
// import {ene}

const FilterEnemies = ({user, update}) => {
    const { control } = useForm();
    const [params, setParams] = useState({})

    useEffect(() => {
        const {'esc&comm': escOrcomm, ex, 'kill&abd': killsOrabd} = enemyType(user)
        setParams({[getSecondWord(escOrcomm)]: 0, [getSecondWord(ex)]: 0, [getSecondWord(killsOrabd)]: 0})
    }, [])

    const handleAbdKill = (e) => {
        console.log(e.target.value)
        const type = getSecondWord(enemyType(user)['kill&abd'])
        const new_params = {...params}
        new_params[type] = parseInt(e.target.value)
        console.log("New", new_params)
        setParams({...new_params})
        makeUpdate()
    }

    const handleEscComm = (e) => {
        const type = getSecondWord(enemyType(user)['esc&comm'])
        setParams({...params, [type]: parseInt(e.target.value)})
        makeUpdate()
    }

    const handleEx = (e) => {
        const type = getSecondWord(enemyType(user)['ex'])
        setParams({...params, [type]: parseInt(e.target.value)})
        makeUpdate()
    }

    const makeUpdate = () => {
        console.log("Here are params", params)
        enemyType(user)['getEnemies'](params).then(enemies => {
            update(enemies)
        })
    }

    return (
        <Form>
            <Form.Group>
                <Dropdown>
                    <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                        Choose
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Dead</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Alive</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Form.Group>
            <Form.Group controlId="AbductionsRange">
                <Form.Label>{enemyType(user)['kill&abd']}</Form.Label>
                <Controller
                    control={control}
                    name="killOrabd"
                    render={() => (
                        <Form.Control
                          type="range"
                          onChange={e => handleAbdKill(e)}
                          min="0" 
                          max="5" 
                        />
                      )}
                />
            </Form.Group>
            <Form.Group controlId="CommRange">
                <Form.Label>{enemyType(user)['esc&comm']}</Form.Label>
                <Controller
                    control={control}
                    name="escOrComm"
                    render={() => (
                        <Form.Control
                          type="range"
                          onChange={e => handleEscComm(e)}
                          min="0" 
                          max="5" 
                        />
                      )}
                />
            </Form.Group>
            <Form.Group controlId="AbductionsRange">
                <Form.Label>{enemyType(user)['ex']}</Form.Label>
                <Controller
                    control={control}
                    name="ex"
                    render={() => (
                        <Form.Control
                          type="range"
                          onChange={e => handleEx(e)}
                          min="0" 
                          max="5" 
                        />
                      )}
                />
            </Form.Group>
    </Form>
    )
}


export default FilterEnemies;