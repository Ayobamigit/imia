import React from 'react';
import { Container } from 'react-bootstrap';
import Setup from '../../components/DashboardComponents/Setup/Setup';
import Stats from '../../components/DashboardComponents/Stats/Stats';
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout';

const Dashboard = () => {
    return (
        <DashboardLayout
            page = "Dashboard"
        >
            <Container className="dashboard-container">
                <Setup />
                <Stats />
            </Container>
        </DashboardLayout>
    )
}

export default Dashboard
