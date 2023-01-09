import React from 'react';
import Header from './components/Header/Header';
// import VehicleDetailsPage from './components/VehicleDetails/VehicleDetailsPage';
import VehicleListPage from './components/VehicleList/VehicleListPage';

import './App.css';

function App() {

    return (
        <div id="app">
            
            <Header/>
            
            <main id="main-content">
                <VehicleListPage/>
                {/* <VehicleDetailsPage/> */}
            </main>
            
        </div>
    );
}

export default App;
