export default function Footer() {
    return (
      <footer className="w-full max-w-6xl flex items-center justify-center mx-auto m-2 bg-green-900 rounded text-white p-8 mt-12">
        
          <div className="grid grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-medium mb-3">Fylpi Immo-online GmbH</h3>
              <p className="text-sm text-gray-300 mb-2">Forchheimergasse 3/13, 1230 Wien, Österreich</p>
              <p className="text-sm text-gray-300 mb-6">office@fylpi.at | www.fylpi.at</p>
              
              <div className="flex items-center">
                <div className="w-8 h-8 bg-transparent border border-gray-300 rounded-full flex items-center justify-center mr-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 18.95C11.95 18.95 11.9 18.95 11.85 18.95C9.1 18.65 6.3 16.75 4.25 13.9C2.95 12.1 2.1 10.3 1.85 8.55C1.65 7.15 2.3 5.8 3.55 5.1L5.55 3.8C6.4 3.25 7.5 3.4 8.15 4.15L9.95 6.2C10.65 7 10.6 8.15 9.85 8.9L9.2 9.55C9.95 10.8 11.15 12.3 12.35 13.2C12.95 12.6 13.15 12.4 13.5 12.1C14.25 11.4 15.35 11.35 16.1 12L18.2 13.85C18.95 14.5 19.1 15.6 18.55 16.45L17.3 18.35C16.65 19.4 15.5 20.05 14.25 20.05C13.5 20.05 12.75 19.85 12 19.5V18.95Z" fill="white"/>
                  </svg>
                </div>
                <span className="text-sm">YouTube</span>
              </div>
            </div>
           
            <div>
              <h3 className="font-medium mb-3">Über uns</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Kontaktieren Sie uns</li>
                <li>Mein Konto</li>
                <li>Kaufen</li>
                <li>Mieten</li>
              </ul>
            </div>
          
            <div>
              <h3 className="font-medium mb-3">FAQ</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Service rund um die Immobilie</li>
                <li>Praktische Anleitungen</li>
                <li>Wissen rund um die Immobilie</li>
                <li>Beratungsdienste</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-600 pt-6">
            <div className="flex justify-between items-center text-xs text-gray-400">
              <div>© 2024 Fylpi. Alle Rechte vorbehalten.</div>
              <div className="flex space-x-4">
                <span>Impressum</span>
                <span>Nutzungsbedingungen</span>
              </div>
            </div>
          </div>
       
      </footer>
    );
  }