import React from 'react';
import { Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#33443C] m-4 rounded text-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
          <div>
            <h3 className="text-lg font-medium mb-4">Fylpi Immo-online GmbH</h3>
            <p className="mb-4">Forchheimergasse 3/13, 1230 Wien, Österreich</p>
            <p className="mb-6">office@fylpi.at | www.fylpi.at</p>
            
            <a href="https://youtube.com" className="inline-flex items-center">
              <Youtube size={24} className="text-white mr-2" />
              <span>YouTube</span>
            </a>
          </div>
       
          <div className="space-y-4">
            <a href="#" className="block">Über uns</a>
            <a href="#" className="block">Kontaktieren Sie uns</a>
            <a href="#" className="block">Mein Konto</a>
            <a href="#" className="block">Kaufen</a>
            <a href="#" className="block">Mieten</a>
          </div>
        
          <div className="space-y-4">
            <a href="#" className="block">FAQ</a>
            <a href="#" className="block">Service rund um die Immobilie</a>
            <a href="#" className="block">Praktische Anleitungen</a>
            <a href="#" className="block">Wissen rund um die Immobilie</a>
            <a href="#" className="block">Beratungsdienste</a>
          </div>
        </div>
       
        <hr className="my-8 border-gray-600" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>© 2024 Fylpi. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white">Impressum</a>
            <a href="#" className="text-gray-300 hover:text-white">Nutzungsbedingungen</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;