import React from 'react';
import Card from '../shared/Card';

const Dashboard: React.FC = () => {
    return <div className="main-content">
        <div className="flex-row-container">
            <Card className="pl-1 pt-2 pb-2 text-center">content</Card>
            <Card className="pl-1 pt-2 pb-2 text-center">content</Card>
            <Card className="pl-1 pt-2 pb-2 text-center">content</Card>
            <Card className="pl-1 pt-2 pb-2 text-center">content</Card>
        </div>
    </div>
};

export default Dashboard;