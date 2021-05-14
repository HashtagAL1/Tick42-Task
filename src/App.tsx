import React from 'react';
import AppRouter from './components/other/AppRouter';
import NavigationBar from './components/shared/NavigationBar';

const App: React.FC = () => {
    return <div className="app-container">
        <NavigationBar />
        <AppRouter />
    </div>
};

export default App;