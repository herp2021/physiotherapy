import React from 'react';
import ClinicCard from './components/ClinicCard';
import ReviewCard from './components/ReviewCard';
import PhotoGallery from './components/PhotoGallery';
import clinics from './data/clinics';
import reviews from './data/reviews';

// Main App component containing all the website content.
const App = () => {
    return (
        <div className="bg-gray-100 text-gray-800 font-inter min-h-screen flex flex-col">
            <header className="bg-white shadow-sm py-6">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-blue-600">Physiotherapy Clinics</h1>
                    <p className="mt-2 text-lg text-gray-600">Your path to recovery and well-being.</p>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-12 md:py-24 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Feel Better, Move Freely</h2>
                <p className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto">
                    Expert care and personalized treatment plans to help you regain strength and mobility.
                </p>
                <a href="https://wa.me/917797743478" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:bg-green-600 inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                        <path d="M12.001 0c-6.627 0-12 5.373-12 12s5.373 12 12 12c6.628 0 12-5.373 12-12s-5.372-12-12-12zm4.722 17.514c-.059.197-.565.342-.969.342-.403 0-.712-.132-1.025-.264-1.579-.661-3.692-1.879-4.881-2.926-.296-.252-.533-.497-.732-.732-1.07-1.117-1.524-2.585-1.524-2.992 0-.406.182-.601.442-.876.26-.275.602-.455.772-.455.17 0 .285.044.401.132.116.088.257.275.401.526.145.252.29.589.434.926.144.336.26.588.381.732.12.144.241.166.42.066s.465-.164.887-.396c.422-.231 1.05-.572 1.625-.945s1.171-.855 1.581-1.258c.41-.403.74-.825.996-1.27.257-.444.402-1.002.402-1.666 0-.665-.165-1.12-.396-1.395-.231-.275-.572-.44-.925-.563-.353-.122-.727-.122-1.07-.122-.343 0-.665.066-.941.066-.276 0-.617.066-.995.429s-.628.791-.879 1.258c-.251.467-.38.89-.524 1.139s-.402.483-.755.732c-.352.251-.775.396-1.138.396-.363 0-.624-.132-.791-.264s-.264-.264-.264-.429c0-.165 0-.396.115-.692s.252-.617.429-.981.429-.754.661-1.091c.231-.337.38-.57.483-.801.103-.231.116-.49.066-.723-.05-.231-.205-.548-.528-.799-.323-.252-.693-.38-1.066-.503-.374-.123-.747-.211-1.138-.211-.39 0-.825.044-1.258.159-.432.115-.89.302-1.322.489-.433.187-.807.352-1.139.528s-.652.38-.957.568c-.305.187-.589.44-.88.756-.29.317-.506.66-.661 1.053-.154.394-.216.732-.216 1.053 0 .506.143 1.01.429 1.525.286.516.693 1.047 1.258 1.664.566.617 1.246 1.234 2.115 1.838s1.869 1.144 2.875 1.577c1.006.433 1.936.639 2.793.639.467 0 .911-.066 1.343-.132.433-.066.825-.198 1.182-.331.357-.132.651-.23.869-.296.218-.066.38-.11.483-.11.103 0 .229.044.38.132s.352.252.483.417c.132.165.231.34.352.528.121.187.218.396.352.617s.302.44.524.616c.221.176.496.264.839.264.343 0 .736-.144 1.127-.429z"/>
                    </svg>
                    Book on WhatsApp
                </a>
            </section>
            
            <PhotoGallery />

            <main className="container mx-auto px-4 py-8 md:py-16 flex-grow">
                <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-12">Our Clinics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {clinics.map((clinic, index) => (
                        <ClinicCard key={index} clinic={clinic} />
                    ))}
                </div>
            </main>

            {/* Google Reviews Section */}
            <section className="bg-blue-50 py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-8">What Our Patients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reviews.map((review, index) => (
                            <ReviewCard key={index} review={review} />
                        ))}
                    </div>
                </div>
            </section>

            <footer className="bg-white shadow-sm py-4 mt-8">
                <div className="container mx-auto px-4 text-center text-sm text-gray-500">
                    &copy; 2025 Physiotherapy Clinics. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default App;

