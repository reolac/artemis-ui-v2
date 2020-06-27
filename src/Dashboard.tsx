import React from 'react';
import UpcomingHolidays from './UpcomingHolidays';
import upcomingHolidays from './mocks/upcomingHolidays.json';
import remainingHolidays from './mocks/remainingHolidays.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RemainingHolidays from './RemainingHolidays';

const Dashboard = () => ( 
    <Container>
        <h2>Dashboard</h2>
        <Row>
            <Col xs={8}>
                <UpcomingHolidays holidays={upcomingHolidays} />
            </Col>
            <Col>
                <RemainingHolidays remainingHolidays={remainingHolidays} />
            </Col>
        </Row>
    </Container>
);

export default Dashboard;
