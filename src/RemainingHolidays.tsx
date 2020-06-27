import React from 'react';
import Table from 'react-bootstrap/Table';
import RemainingHoliday from './models/RemainingHoliday';

const RemainingHolidays = ({ remainingHolidays }: { remainingHolidays: RemainingHoliday[] }) => (
    <>
        <h3>Remaining Holidays</h3>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Person</th>
                    <th>#</th>
                </tr>
            </thead>
            <tbody>
                {remainingHolidays.map((holiday) => (
                    <tr key={holiday.person}>
                        <td>{holiday.person}</td>
                        <td>{holiday.numberOfDays}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </>
);

export default RemainingHolidays;
