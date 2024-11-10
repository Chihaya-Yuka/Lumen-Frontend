import React from 'react';

const MainContent = ({ searchQuery }) => {
    return (
        <div className="flex-grow flex flex-col items-center justify-center p-4 transition-all duration-300 ease-in-out">
            <div className="flex flex-col items-center space-y-6">
                <div className="text-4xl font-bold text-gray-800">流明 | AI 搜索引擎</div>
                <div className="flex items-center border-b border-gray-400 py-2">
                    <input
                        id="searchInput"
                        type="text"
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        placeholder="输入问题，明确**"
                    />
                    <button onClick={searchQuery} className="flex-shrink-0 text-gray-500 hover:text-gray-700 transition duration-150">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.743 14.743l4.242 4.242m-5.1-3.9a7 7 0 1110-10 7 7 0 01-10 10z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
