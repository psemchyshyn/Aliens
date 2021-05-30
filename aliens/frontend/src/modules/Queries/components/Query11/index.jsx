import {Card, Form, Button, Col, Row} from "react-bootstrap"
import {Controller, useForm} from "react-hook-form"
import {useState} from "react"

const Query11 = () => {
    const {handleSubmit} = useForm();
    const [result, setResult] = useState([])


    const onSubmit = (request) => {
        fetch('/api/queries/11',
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
            console.log(data)
            setResult(data)
        })
    }

    return (
    <Card className='my-3'>
        <Card.Header as="h5">Query 11</Card.Header>
        <Card.Body>
            <Card.Title>
            знайти сумарну кiлькiсть викрадень по мiсяцях;
            </Card.Title>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
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
                            <div className="stats-element">
                                {
                                    `${el[0]}: ${el[1]}`
                                }       
                            </div>
                        ))
                    }            
            </div>
        </Card.Footer>
    </Card>
    )    
}

export default Query11;