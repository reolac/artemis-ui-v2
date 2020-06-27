import React, { useState } from 'react';
import UpcomingHoliday from './models/Holiday';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import AddHoliday from './AddHoliday';

const UpcomingHolidays = ({ holidays }: { holidays: UpcomingHoliday[] }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <h3>Upcoming Holidays</h3>
            <Button variant="primary" onClick={handleShow} style={{ float: 'left', marginBottom: 10 }}>
                Add Holiday
            </Button>
            <AddHoliday show={show} handleClose={handleClose} />
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Person</th>
                        <th>Hut</th>
                        <th>From</th>
                        <th>To</th>
                    </tr>
                </thead>
                <tbody>
                    {holidays.map((holiday) => (
                        <tr key={holiday.id}>
                            <td>{holiday.person}</td>
                            <td>
                                #{holiday.hutNumber} {holiday.hutName}
                            </td>
                            <td>{formatDate(holiday.startDate)}</td>
                            <td>{formatDate(holiday.endDate)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

const formatDate = (date: string) => moment(date).format('dddd Do MMMM yyyy');

export default UpcomingHolidays;
