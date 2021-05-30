import {Card, Form, Button, Col, Row} from "react-bootstrap"
import {Controller, useForm} from "react-hook-form"
import {useState} from "react"

const Query5 = () => {
    const {control, handleSubmit} = useForm();
    const [result, setResult] = useState([])


    const onSubmit = (request) => {
        console.log(request)
        fetch('/api/queries/5',
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
        <Card.Header as="h5">Query 5</Card.Header>
        <Card.Body>
            <Card.Title>
            для людини H знайти усiх прибульцiв, якi викрадали її та були вбитi нею ж;
            </Card.Title>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col md={12}>
                        <Form.Group controlId="Query5Form">
                            <Form.Label>Id of H</Form.Label>
                            <Controller
                                name="HId"
                                control={control}
                                render={({ field, fieldState}) =>  (
                                    <Form.Control {...field} isInvalid={fieldState.error}/>
                                )
                            }
                                rules={{required:"true", pattern: /\d+/}}
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

export default Query5;