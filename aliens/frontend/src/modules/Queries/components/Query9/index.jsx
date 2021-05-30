import {Card, Form, Button, Col, Row} from "react-bootstrap"
import {Controller, useForm} from "react-hook-form"
import {useState} from "react"

const Query9 = () => {
    const {control, handleSubmit} = useForm();
    const [result, setResult] = useState([])


    const onSubmit = (request) => {
        fetch('/api/queries/9',
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        }
        ).then(data => {
            return data.json()
        }).then(data => {
            setResult(data)
        })
    }

    return (
    <Card className='my-3'>
        <Card.Header as="h5">Query 9</Card.Header>
        <Card.Body>
            <Card.Title>
            для прибульця A та кожної екскурсiї, яку вiн проводив, знайти скiльки разiв за вказаний
            перiод (з дати F по дату T) вiн проводив екскурсiю для щонайменше N людей;
            </Card.Title>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col md={3}>
                        <Form.Group controlId="Query9Form">
                            <Form.Label>Id of A</Form.Label>
                            <Controller
                                name="AId"
                                control={control}
                                render={({ field, fieldState}) =>  (
                                    <Form.Control {...field} isInvalid={fieldState.error}/>
                                )
                            }
                                rules={{required:"true", pattern: /\d+/}}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="Query9Form">
                            <Form.Label>N</Form.Label>
                            <Controller
                                name="N"
                                control={control}
                                render={({ field, fieldState}) =>  (
                                    <Form.Control {...field} isInvalid={fieldState.error}/>
                                )
                            }
                                rules={{required:"true", pattern: /\d+/}}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="Query9Form">
                            <Form.Label>F date</Form.Label>
                            <Controller
                                name="F"
                                control={control}
                                render={({ field }) =>  (
                                    <Form.Control type="date" {...field}/>
                                )
                            }
                                rules={{required:"true", pattern: /\d+/}}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="Query9Form">
                            <Form.Label>T date</Form.Label>
                            <Controller
                                name="T"
                                control={control}
                                render={({ field}) =>  (
                                    <Form.Control type="date" {...field}/>
                                )
                            }
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit">
                                Submit
                        </Button>
                    </Col>
                    </Row>
            </form>
        </Card.Body>
        <Card.Footer>
            <div className="stats">
                    {
                        result && result.map(el => (
                            <div className="stats-element">{el}</div>
                        ))
                    }            
            </div>
        </Card.Footer>
    </Card>
    )    
}

export default Query9;