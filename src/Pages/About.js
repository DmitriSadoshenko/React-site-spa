import React, {Component} from 'react'
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id='ledt-tabs-example' defaultActiveKey='first'>
                    <Row>
                        <Col sm={3}>
                            <Nav variant='pills' className='flex-column mt-2'>
                                <Nav.Item>
                                    <Nav.Link eventKey='first'>
                                        Design
                                    </Nav.Link>
                                    <Nav.Link eventKey='second'>
                                        Team
                                    </Nav.Link>
                                    <Nav.Link eventKey='third'>
                                        Programming
                                    </Nav.Link>
                                    <Nav.Link eventKey='fourth'>
                                        Frameworks
                                    </Nav.Link>
                                    <Nav.Link eventKey='fifth'>
                                        Libraries
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className='mt-3'>
                                <Tab.Pane eventKey='first'>
                                    <img
                                        src='https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/89d45527-c11f-425e-96f3-c917f27e5ca9/figma-covers-in-action.gif'/>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Aperiam dolor numquam obcaecati optio quo sapiente tempore tenetur?
                                        A architecto asperiores aspernatur delectus deserunt ducimus,
                                        id modi nemo quaerat quisquam, voluptate.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                    <img
                                        src='https://cdn.corporatefinanceinstitute.com/assets/team-cohesion.jpeg'
                                    />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Aperiam dolor numquam obcaecati optio quo sapiente tempore tenetur?
                                        A architecto asperiores aspernatur delectus deserunt ducimus,
                                        id modi nemo quaerat quisquam, voluptate.

                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Aliquid autem distinctio dolore praesentium provident repellendus rerum.
                                        Amet corporis eos fuga modi molestias quod vero.
                                        At beatae consequuntur non optio pariatur?
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='third'>
                                    <img
                                        src='https://baumaninstrument.com/wp-content/uploads/2020/08/computer.jpg'
                                    />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Aperiam dolor numquam obcaecati optio quo sapiente tempore tenetur?
                                        A architecto asperiores aspernatur delectus deserunt ducimus,
                                        id modi nemo quaerat quisquam, voluptate.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='fourth'>
                                    <img
                                        src='https://hachinet.com/upload/2020/08/framework-la-gi-tim-hieu-ve-cac-framework-20200831112124.jpeg'/>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Aperiam dolor numquam obcaecati optio quo sapiente tempore tenetur?
                                        A architecto asperiores aspernatur delectus deserunt ducimus,
                                        id modi nemo quaerat quisquam, voluptate.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='fifth'>
                                    <img
                                        src='https://lh3.googleusercontent.com/proxy/2OYOOvbVChjCWN29N-byKCQ91lm9hf4ofNlhMUaPEU6gpk65aCa3zilomXCUJzOZVjeQdLIVUjrgtA3YCcT9mEB4pOaCAN_y3q_5ql7jQNX3Skijbm7dZ6W8-BzpBEefA4fMqQ'/>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Aperiam dolor numquam obcaecati optio quo sapiente tempore tenetur?
                                        A architecto asperiores aspernatur delectus deserunt ducimus,
                                        id modi nemo quaerat quisquam, voluptate.
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}