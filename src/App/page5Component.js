import React from 'react';
import {Accordion, Card, Button} from 'react-bootstrap';

const page5Component=()=>{
    return(
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Click me!
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm page 5</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default page5Component;