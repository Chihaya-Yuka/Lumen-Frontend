import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const App = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const searchQuery = () => {
        const input = document.getElementById('searchInput').value;
        if (input) {
            const encodedQuery = encodeURIComponent(input);
            window.location.href = `/?q=${encodedQuery}`;
        }
    };

    return (
        <div className={`flex h-screen ${sidebarOpen ? 'overflow-hidden' : ''}`}>
            <Sidebar toggleSidebar={toggleSidebar} />
            <div className="flex-grow flex items-center justify-center p-4 transition-all duration-300 ease-in-out">
                <MainContent searchQuery={searchQuery} />
            </div>
        </div>
    );
};

export default App;
