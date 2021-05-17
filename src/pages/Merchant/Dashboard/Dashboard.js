import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Setup from '../../../components/DashboardComponents/Setup/Setup';
import Stats from '../../../components/DashboardComponents/Stats/Stats';
import DashboardLayout from '../../../components/DashboardLayout/DashboardLayout';

const Dashboard = () => {
    const [state, setState] = useState({
        status : 'Offline'
    })

    const {status} = state;
    return (
        <DashboardLayout
            page = "Dashboard"
            status = {status}
        >
            <Container className="dashboard-container">
                <Setup />
                <Stats />
            </Container>
        </DashboardLayout>
    )
}

export default Dashboard
