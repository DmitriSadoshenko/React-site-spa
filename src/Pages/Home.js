import React, {Component} from 'react'
import CarouselBox from "../Components/CarouselBox";
import {Button, Card, CardDeck, Container} from "react-bootstrap";
import team1 from '../assets/team1.jpg'
import team2 from '../assets/team2.jpg'
import team3 from '../assets/team3.jpg'

export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox/>
                <Container>
                    <h2 className='text-center' m-4>Our team</h2>
                    <CardDeck className='m-4'>
                        <Card border='success'>
                            <Card.Img
                                variant='top'
                                src={team1}
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </Card.Text>
                                <Button variant='primary'>About team</Button>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </Card.Text>
                                <Button variant='primary'>About team</Button>
                            </Card.Body>
                            <Card.Img
                                variant='bottom'
                                src={team2}
                            />
                        </Card>

                        <Card border='success'>
                            <Card.Img
                                variant='top'
                                src={team3}
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </Card.Text>
                                <Button variant='primary'>About team</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>
        )
    }
}