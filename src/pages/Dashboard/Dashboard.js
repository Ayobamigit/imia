import React from 'react';
import { Container } from 'react-bootstrap';
import Setup from '../../components/DashboardComponents/Setup/Setup';
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout';

const Dashboard = () => {
    return (
        <DashboardLayout
            page = "Dashboard"
        >
            <Container className="dashboard-container">
                <Setup />
            </Container>
        </DashboardLayout>
    )
}

export default Dashboard
