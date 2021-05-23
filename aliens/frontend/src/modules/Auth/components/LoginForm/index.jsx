import {Modal, Form, Button} from "react-bootstrap";
// import LogTrigger from "../LogTrigger/index"
import {useState} from "react"
import {useForm, Controller} from "react-hook-form"
import {useDispatch} from "react-redux"

import {loginUser} from "../../actions/actions"
import { getAlien } from "../../../../services/alien";
import { getHuman } from "../../../../services/human"

const LoginForm = () => {
    const [show, setShow] = useState(false);
    const {control, handleSubmit} = useForm();
    const dispatch = useDispatch();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onSubmit = (e) => {
        if (e.isAlien) {
            getAlien(e.id).then(alien => {
                dispatch({type: loginUser, payload: {...alien, isAlien: e.isAlien}})
            })
        } else {
            getHuman(e.id).then(alien => {
                dispatch({type: loginUser, payload: {...alien, isAlien: e.isAlien}})
            })
        }
        handleClose()
    }
    return (
        <>
            <Button onClick={handleShow}>Login</Button>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Please, Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group controlId="formBasicId">
                        <Form.Label>Id</Form.Label>
                        <Controller
                            name="id"
                            control={control}
                            render={({ field, fieldState}) =>  (
                                <Form.Control {...field} isInvalid={fieldState.error}/>
                            )
                        }
                            rules={{required:"true", pattern: /\d+/}}
                        />

                        <Controller
                            name="isAlien"
                            control={control}
                            render={({ field, fieldState}) =>  
                                <>
                                <Form.Check
                                    label={`Alien`}
                                    {...field}
                                />
                                </>
                        }
                        />
                    </Form.Group>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal.Body>

        </Modal>
        </>

      
    )
}

export default LoginForm;