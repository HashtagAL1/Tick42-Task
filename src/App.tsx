import React from 'react';
import AppRouter from './components/other/AppRouter';
import CustomLoader from './components/shared/CustomLoader';
import NavigationBar from './components/shared/NavigationBar';

const App: React.FC = () => {
    return <div className="app-container">
        <NavigationBar />
        <AppRouter />
        <CustomLoader />
    </div>
};

export default App;