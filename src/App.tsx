import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Container from 'react-bootstrap/Container';

function App() {
    return (
        <div className="App">
            <Container fluid>
                <Dashboard />
            </Container>
        </div>
    );
}

export default App;
