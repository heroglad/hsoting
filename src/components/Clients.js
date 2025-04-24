import React, { useRef, useState } from 'react';
import klin from '../images/clients/klin.jpg';
import annapurna from '../images/clients/annupurna.png';
import autotrador from '../images/clients/autotrador.png';
import palmgrove from '../images/clients/palmgrove.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const clients = [
  {
    name: "Klin",
    logo: klin,
    shortDesc: "Laundry service provider",
    fullDesc: "Klin Laundromat is a pioneering laundry service based in Kathmandu, Nepal, offering reliable, affordable, and high-quality cleaning solutions.",
    link: "https://klin.com.np"
  },
  {
    name: "Autotraders",
    logo: autotrador,
    shortDesc: "Automobile Platform",
    fullDesc: "Auto Trader is a U.S.-based automobile company specializing in the buying and selling of both new and pre-owned vehicles.",
    link: "https://www.autotrader.com"
  },
  {
    name: "Annapurna Pharmacy",
    logo: annapurna,
    shortDesc: "Online Pharmacy Store", 
    fullDesc: "Annapurna Pharmacy is a trusted online pharmacy based in Nepal, offering medicines and healthcare essentials.",
    link: "http://annapurnapharmacy.com/"
  },
  {
    name: "Palm Grove Eco Resort",
    logo: palmgrove,
    shortDesc: "Resort and Spa", 
    fullDesc: "Palm Grove Eco Resort is an eco-friendly resort in Portblair, combining sustainability and luxury.",
    link: "https://palmgroveecoresort.com"
  }
];

const Clients = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="mt-8 bg-gray-100 relative">
      <section data-aos="fade-up">
        <div className="my-4 py-4">
          <h2 className="text-center text-3xl text-blue-900 uppercase font-bold">Our Clients</h2>
          <div className='flex justify-center'><div className='w-24 border-b-4 border-blue-900'></div></div>
          <h2 className="mt-4 text-center text-xl lg:text-2xl font-semibold text-blue-900">Some of our clients.</h2>
        </div>

        {/* Slider Container */}
        <div className="relative px-8">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-800 text-white rounded-full p-2 z-10 shadow-md"
          >
            <ChevronLeft />
          </button>
          <div className="px-8">
          <div
            ref={scrollRef}
            className="flex   overflow-x-auto space-x-6 py-4 px-8 justify-center  scroll-smooth pb-4 no-scrollbar"
          >
            {clients.map((client, index) => (
              <div
                key={index}
                className="min-w-[600px] max-w-[300px] bg-white rounded-xl shadow-md p-4 cursor-pointer hover:shadow-lg transition"
                onClick={() => setSelectedClient(client)}
              >
                <div className="flex items-center justify-center h-32">
                  <img src={client.logo} alt={client.name} className="h-20 object-contain" />
                </div>
                <div className="text-center mt-2">
                  <h3 className="text-lg font-semibold text-blue-800">{client.name}</h3>
                  <p className="text-gray-600 text-sm">{client.shortDesc}</p>
                </div>
              </div>
            ))}
          </div>
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-800 text-white rounded-full p-2 z-10 shadow-md"
          >
            <ChevronRight />
          </button>
        </div>
      </section>

      {/* Modal */}
      {selectedClient && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 max-w-md mx-auto relative shadow-lg">
            <button
              className="absolute top-2 right-4 text-gray-500 text-xl font-bold"
              onClick={() => setSelectedClient(null)}
            >
              &times;
            </button>
            <div className="flex justify-center mb-4">
              <img src={selectedClient.logo} alt={selectedClient.name} className="h-24" />
            </div>
            <h3 className="text-2xl font-semibold text-blue-900 text-center">{selectedClient.name}</h3>
            <p className="text-gray-700 mt-2 text-center">{selectedClient.fullDesc}</p>
            <div className="mt-4 text-center">
              <a
                href={selectedClient.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-900 px-4 py-2 rounded-xl hover:bg-blue-800 inline-block"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clients;
