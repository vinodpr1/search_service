"use client";
import { useEffect, useState } from 'react';
import { Heart, Eye, MapPin, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import axios from 'axios';

interface Property {
  id: string;
  title: string;
  type: string;
  location: string;
  rooms: number;
  bathrooms: number;
  area: number;
  price: number;
  views: number;
  image: string;
  transactionType: string
}

interface ApiResponse {
  data: Property[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
  success: boolean;
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('kaufen');
  const [currentPage, setCurrentPage] = useState(1);
  const [property, setProperty] = useState<Property[]>([]);
  const [totalPages, setTotalPage] = useState<number | null>(null);


  const handlePageChange = (page: any) => {
    if (totalPages && page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const getProperty = async () => {
      const response = await axios.get<ApiResponse>(`http://localhost:3300/api/v1/property/paginate?page=${currentPage}`);
      console.log(response.data);
      setTotalPage(response.data.pagination.totalPages);
      setProperty(response.data.data);
    }
    getProperty();
  }, [currentPage]);

  // http://localhost:3300/api/v1/property/filter?location=1230 Wien&type=Architektenhaus&transactionType=Kaufen

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Kaufen');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };


  return (
    <div className="max-w-6xl min-h-screen mx-auto p-4 font-sans mt-24">

      <div className="flex gap-2 mb-6">
        <div className="flex-[3] border rounded flex items-center px-3 py-2">
          <MapPin size={18} className="text-gray-400 mr-2" />
          <button
            className="flex items-center justify-between px-4 w-full text-sm border border-red-600"
            onClick={toggleDropdown}
          >
           Locationn
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded mt-1 shadow-md z-10">
              <button
                className={`px-4 py-2 w-full text-left text-sm hover:bg-gray-100 ${selected === "Wien" ? "bg-[#748790]" : ""}`}
                onClick={() => selectOption('Wien')}
              >
                Wien
              </button>
              <button
                className={`px-4 py-2 w-full text-left text-sm hover:bg-gray-100 ${selected === "Niederösterreich" ? "bg-[#748790]" : ""}`}
                onClick={() => selectOption('Niederösterreich')}
              >
                Niederösterreich
              </button>
              <button
                className={`px-4 py-2 w-full text-left text-sm hover:bg-gray-100 ${selected === "Oberösterreich" ? "bg-[#748790]" : ""}`}
                onClick={() => selectOption('Oberösterreich')}
              >
                Oberösterreich
              </button>
              <button
                className={`px-4 py-2 w-full text-left text-sm hover:bg-gray-100 ${selected === "Salzburg" ? "bg-[#748790]" : ""}`}
                onClick={() => selectOption('Salzburg')}
              >
                Salzburg
              </button>
              <button
                className={`px-4 py-2 w-full text-left text-sm hover:bg-gray-100 ${selected === "Tirol" ? "bg-[#748790]" : ""}`}
                onClick={() => selectOption('Tirol')}
              >
                Tirol
              </button>
            </div>

          )}

        </div>

        <div className="flex-1 border rounded relative">
          <button
            className="flex items-center justify-between px-4 py-2 w-full text-sm"
            onClick={toggleDropdown}
          >
            {selected}
            <ChevronDown size={16} />
          </button>
        
          {isOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded mt-1 shadow-md z-10">
              <button
                className={`px-4 py-2 w-full text-left text-sm hover:bg-gray-100 ${selected == "Kaufen" ? "bg-[#748790]" : ""}`}
                onClick={() => selectOption('Kaufen')}
              >
                Kaufen
              </button>
              <button
                className={`px-4 py-2 w-full text-left text-sm hover:bg-gray-100 ${selected == "Mieten" ? "bg-[#748790]" : ""}`}
                onClick={() => selectOption('Mieten')}
              >
                Mieten
              </button>
            </div>
          )}
        </div>

        <div className="flex-1 border rounded">
          <button className="flex items-center justify-between px-4 py-2 w-full text-sm">
            Type
            <ChevronDown size={16} />
          </button>
        </div>

        <div className="flex-1 border rounded">
          <button className="flex items-center justify-between px-4 py-2 w-full text-sm">
            Preis
            <ChevronDown size={16} />
          </button>
        </div>

        <div className="flex-1 border rounded">
          <button className="flex items-center justify-between px-4 py-2 w-full text-sm">
            Fläche
            <ChevronDown size={16} />
          </button>
        </div>

        <div className="flex-1 border rounded">
          <button className="flex items-center justify-between px-4 py-2 w-full text-sm">
            Zimmer
            <ChevronDown size={16} />
          </button>
        </div>

        <button className="border rounded p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
        </button>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 mx-auto gap-6">

        {
          property.map((item, index) => {
            return (
              <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={`${item.type} property`}
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute top-2 right-2 bg-white p-1 rounded-full">
                    <Heart size={18} className="text-gray-500" />
                  </button>
                </div>
                <div className="p-4">
                  <h2 className="font-bold text-sm uppercase mb-1 text-gray-700">{item.title}</h2>
                  <div className="text-xs text-gray-500 font-semibold mb-2">ID: {item.id} | {item.type} | {item.location}</div>
                  <div className="text-xs text-gray-500 font-semibold mb-3">{item.rooms} Zimmer | {item.bathrooms} Bad | {item.area} | {item.transactionType}</div>
                  <div className="flex justify-between items-center">
                    <div className="font-bold text-gray-700">{item.price}</div>
                    <div className="flex items-center text-xs text-gray-500">
                      <span>{item.views}</span>
                      <Eye size={16} className="ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>


      <div className="flex justify-center items-center mt-12 mb-6">
        <div className="flex items-center space-x-1">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-2 rounded flex items-center ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <ChevronLeft size={18} />
          </button>

          {[...Array(totalPages || 0)].map((_, index) => {
            const pageNumber = index + 1;
            if (
              pageNumber === 1 ||
              pageNumber === (totalPages || 0) ||
              (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
            ) {
              return (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`px-3 py-1 rounded ${currentPage === pageNumber
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  {pageNumber}
                </button>
              );
            } else if (
              (pageNumber === currentPage - 2 && currentPage > 3) ||
              (pageNumber === currentPage + 2 && currentPage < (totalPages || 0) - 2)
            ) {
              return <span key={pageNumber} className="px-2">...</span>;
            }
            return null;
          })}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-2 rounded flex items-center ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}