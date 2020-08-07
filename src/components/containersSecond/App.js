import React from 'react'
import MyHeader from './components/Header';
import MyNavbar from './components/Navbar';
import MyBody from './components/Body';
function MyApp() {
    return (
        <div>
            <MyHeader />
            <MyNavbar />
            <MyBody />
        </div>
    )
}

export default MyApp;