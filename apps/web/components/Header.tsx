"use client";
import React, {useState} from 'react'

const Header = () => {


    const [activeTab, setActiveTab] = useState('kaufen');
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 8;
  
    const handlePageChange = (page:any) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);

        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
  

  return (
    <div className='fixed top-0 left-0  bg-white z-50 w-full flex'>
        <div className="max-w-6xl w-full px-4 py-2 pt-8 mx-auto flex justify-between items-center">
          <h1 className="font-bold text-gray-800 text-lg uppercase tracking-wider">Immobilien Suche</h1>
          <div className="flex items-center gap-6">
             <button 
               className={`text-sm cursor-pointer ${activeTab === 'kaufen' ? 'text-gray-800' : 'text-gray-500'}`}
               onClick={() => setActiveTab('kaufen')}
             >
               Kaufen
             </button>
             <button 
               className={`text-sm cursor-pointer  ${activeTab === 'mieten' ? 'text-gray-800' : 'text-gray-500'}`}
               onClick={() => setActiveTab('mieten')}
             >
               Mieten
             </button>
             <button className="text-sm cursor-pointer  text-gray-500">Inserat schalten</button>
             <button className="bg-gray-800 cursor-pointer  text-white px-4 py-2 text-sm rounded">Sign in</button>
             <button className="text-sm">ENG</button>
          </div>
      </div>
    </div>
  )
}

export default Header