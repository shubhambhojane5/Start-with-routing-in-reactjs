import React from 'react';
import {Accordion, Card, Button} from 'react-bootstrap';

const page3Component=()=>{
    return(
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Click me!
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm page 3</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default page3Component;