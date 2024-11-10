import React from 'react';

const Sidebar = ({ toggleSidebar }) => {
    return (
        <div className="bg-gray-900 text-white flex flex-col w-64 transform transition-transform duration-300 ease-in-out">
            <button onClick={toggleSidebar} className="p-4 text-gray-400 hover:text-white transition duration-150">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 5h12V4H4v1zm0 5h12V9H4v1zm0 5h12v-1H4v1z" clipRule="evenodd" />
                </svg>
            </button>
            <nav className="flex-grow mt-4 space-y-4 px-4">
                {/* Navigation items */}
                {['搜索', '资讯', '信息差', '工具', '社区', '智能体'].map((item, index) => (
                    <a key={index} href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-700">
                        {/* Icon for each item */}
                        <svg className="h-6 w-6 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {/* You can replace with your own icon path */}
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                    </a>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
