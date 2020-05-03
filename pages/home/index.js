import React from 'react'
import Layout from '../../layouts/LayoutDefault'
import {
    Container,
    Row,
    Col,
    Button,
    Jumbotron
} from 'react-bootstrap';

export default function Home() {
    return (
        <Layout>

            <Jumbotron>
                <Container>
                    <h1>Burası Ana Sayfa</h1>
                    <p>lorem import dolar sit amet</p>
                    <Button>Learn more</Button>
                </Container>
            </Jumbotron>

            <Container>
                <Row>
                    <Col>1 of 2</Col>
                    <Col>2 of 2</Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>

        </Layout>
    )
}
