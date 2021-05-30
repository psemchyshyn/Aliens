import {Card, Form, Button, Col, Row} from "react-bootstrap"
import {Controller, useForm} from "react-hook-form"
import {useState} from "react"

const Query12 = () => {
    const {control, handleSubmit} = useForm();
    const [result, setResult] = useState([])


    const onSubmit = (request) => {
        fetch('/api/queries/12',
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
        <Card.Header as="h5">Query 12</Card.Header>
        <Card.Body>
            <Card.Title>
            вивести кораблi у порядку спадання сумарної кiлькостi еспериментiв, що були проведенi на
            кораблi за участi даного прибульця A протягом вказаного перiоду (з дати F по дату T);
            </Card.Title>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col md={4}>
                        <Form.Group controlId="Query12Form">
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
                    <Col md={4}>
                        <Form.Group controlId="Query12Form">
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
                    <Col md={4}>
                        <Form.Group controlId="Query12Form">
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

export default Query12;