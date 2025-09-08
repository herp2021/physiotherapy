import React from 'react';

// Reusable component for displaying a single clinic's information.
const ClinicCard = ({ clinic }) => (
    <section className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 border-b-2 border-blue-500 pb-3 mb-6">
            {clinic.name}
        </h2>
        <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start">
                <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin text-blue-500 mt-1">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                    </svg>
                </div>
                <p className="ml-3 text-gray-700 text-lg">{clinic.address}</p>
            </div>
            
            {/* Opening Hours */}
            <div className="flex items-start">
                <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock-2 text-blue-500 mt-1">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 6v6l4 2"/>
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2h-15.64a2 2 0 0 1-2.18-2v-3a2 2 0 0 1 2.18-2h15.64a2 2 0 0 1 2.18 2zM12 2v15"/>
                    </svg>
                </div>
                <div className="ml-3">
                    <p className="font-medium text-gray-700">Opening Hours:</p>
                    <p className="mt-1 text-gray-600">{clinic.openingHours}</p>
                </div>
            </div>
            
            {/* Phone Number (if available) */}
            {clinic.phone && (
                <div className="flex items-start">
                    <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call text-blue-500 mt-1">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2h-15.64a2 2 0 0 1-2.18-2v-3a2 2 0 0 1 2.18-2h15.64a2 2 0 0 1 2.18 2zM14 2h.01M19.78 3.22L17.56 5.44M6.44 5.44L4.22 3.22M2 12h.01"/>
                        </svg>
                    </div>
                    <p className="ml-3 text-gray-700 text-lg">
                        <span className="font-medium">Phone:</span> {clinic.phone}
                    </p>
                </div>
            )}

            {/* Map Link */}
            <div className="pt-4">
                <a href={clinic.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full transition duration-300 transform hover:scale-105">
                    View on Map
                </a>
            </div>
        </div>
    </section>
);

export default ClinicCard;

