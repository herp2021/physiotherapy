import React from 'react';
import ReactDOM from 'react-dom/client';
import { FaPhone, FaMapMarkerAlt, FaStar, FaRegStar } from 'react-icons/fa';

// Combined all data and components into a single file for simplicity.

// Clinic Data
const clinics = [
  {
    name: 'Best Physiotherapy Clinic',
    banglaName: 'সেরা ফিজিওথেরাপি ক্লিনিক',
    address: 'Thakurpukur - Birbhat - Bakrahat - Raipur Rd, Bakrahat, West Bengal 743377, India',
    openingHours: 'Monday - Saturday: 4:00 PM - 8:00 PM',
    phone: '+917797743478',
    mapLink: 'https://share.google/I6S7izRXb4lT9wOfU',
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.960995600419!2d88.2088563!3d22.392827800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a026318a55424d9%3A0x1e092f2add95baa8!2zQmVzdCBQaHlzaW90aGVyYXB5IENsaW5pYy_gprjgp4fgprDgpr4g4Kar4Ka_4Kac4Ka_4KaT4Kal4KeH4Kaw4Ka-4Kaq4Ka_IOCmleCnjeCmsuCmv-CmqOCmv-CmlQ!5e0!3m2!1sen!2sin!4v1757419544135!5m2!1sen!2sin",
    photos: [
      'https://placehold.co/600x400/29B961/white?text=Physiotherapy+session',
      'https://placehold.co/600x400/29B961/white?text=Rehabilitation+exercises',
      'https://placehold.co/600x400/29B961/white?text=Modern+clinic+interior',
    ],
  },
  {
    name: 'Arogya Physiotherapy Clinic',
    banglaName: 'আরোগ্য ফিজিওথেরাপি ক্লিনিক',
    address: 'Thakurpukur - Birbhat - Bakrahat - Raipur Rd, Bakrahat, West Bengal 743377, India',
    openingHours: 'Monday - Saturday: 4:00 PM - 8:00 PM',
    phone: '+917797743478',
    mapLink: 'https://share.google/Ing1UEaInxUwdE1iQ',
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.629215821806!2d88.2788348!3d23.0740514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8f36306cdb84d%3A0x6f6596a9606fc2d0!2zQXJvZ3lhIFBoeXNpb3RoZXJhcHkgY2xpbmljL-CmhuCmsOCni-Cml-CnjeCmryDgpqvgpr_gppzgpr_gppPgpqXgp4fgprDgpr7gpqrgpr8g4KaV4KeN4Kay4Ka_4Kao4Ka_4KaV!5e0!3m2!1sen!2sin!4v1757419585755!5m2!1sen!2sin",
    photos: [
      'https://placehold.co/600x400/29B961/white?text=Physiotherapy+session',
      'https://placehold.co/600x400/29B961/white?text=Rehabilitation+exercises',
      'https://placehold.co/600x400/29B961/white?text=Modern+clinic+interior',
    ],
  },
];

// Review Data
const reviews = [
  {
    author: 'Ayan Chatterjee',
    rating: 5,
    comment: 'A great physiotherapists I ever seen, I do knee ACL Surgery and doctor prescrib to me a good physiotherapist and I meet this very good person and he recover me very fast. I recommend to everyone meet this person and solve your problem very fast and secure.',
  },
  {
    author: 'Uday Pal',
    rating: 5,
    comment: 'I have been in serious  back  pain problem in the year 2019 due to an accident and it is said by most to go for surgery. But, meeting with Dr. Dibyendu Das is a blessing to me. His encouragement and assistance help me to recover gradually. Really, great assistance from a great physiotherapist. Now, I am leading  normal everday life which is painfree but not assistance  free. Thanks to Dr Dibyendu Das.',
  },
  {
    author: 'Debi Raha',
    rating: 5,
    comment: 'Ami Debjani Raha amar soldar lock hyechilo ai sir amar hath akdam thik kre diyece ar 1year por amar brain stock hoi amar chokh puro tera hoye jai ai sir kno charj charai sudhu vidio cl amai kichu bam dekhia dei sei bam kre ami ajj puro sustho uni khub valo akjon therapeutic tarsathe khub valo manush',
  },
];

// Reusable Components
const StarRating = ({ rating }) => {
  return (
    <div className="flex text-green-600">
      {[...Array(5)].map((_, index) => (
        <span key={index}>
          {index < rating ? <FaStar className="w-5 h-5" /> : <FaRegStar className="w-5 h-5" />}
        </span>
      ))}
    </div>
  );
};

const ReviewCard = ({ review }) => (
  <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
    <StarRating rating={review.rating} />
    <p className="text-gray-600 italic">"{review.comment}"</p>
    <div className="flex justify-between items-center text-sm text-gray-500">
      <span>- {review.author}</span>
    </div>
  </div>
);

const PhotoGallery = ({ photos }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {photos.map((photo, index) => (
      <div key={index} className="rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
        <img src={photo} alt={`Clinic photo ${index + 1}`} className="w-full h-auto object-cover" />
      </div>
    ))}
  </div>
);

const ClinicCard = ({ clinic }) => (
  <div className="bg-white p-6 rounded-2xl shadow-xl flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
    <div className="flex-1 space-y-4">
      <h3 className="text-2xl font-bold text-gray-900">{clinic.name}</h3>
      <h4 className="text-xl font-medium text-gray-700">{clinic.banglaName}</h4>
      <div className="space-y-2 text-gray-600">
        <div className="flex items-start space-x-2">
          <FaMapMarkerAlt className="w-5 h-5 flex-shrink-0 text-green-600 mt-1" />
          <span>{clinic.address}</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhone className="w-5 h-5 flex-shrink-0 text-green-600" />
          <span>{clinic.phone}</span>
        </div>
      </div>
      <div className="flex flex-col space-y-2 md:space-x-4">
        <a href={`https://wa.me/${clinic.phone}`} className="inline-flex items-center justify-center bg-green-500 text-white font-semibold py-3 px-6 rounded-full transition-colors hover:bg-green-600 transform hover:scale-105">
          Book on WhatsApp
        </a>
        <a href={clinic.mapLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-full transition-colors hover:bg-gray-300 transform hover:scale-105 mt-2 md:mt-0">
          View on Map
        </a>
      </div>
    </div>
    {/* Embedded Map Section */}
    {clinic.mapEmbed && (
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <iframe
          title={`${clinic.name} Location`}
          src={clinic.mapEmbed}
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: '1rem' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="shadow-lg"
        ></iframe>
      </div>
    )}
  </div>
);

const App = () => {
  return (
    <div className="bg-gray-100 text-gray-800 font-inter min-h-screen">
      {/* Header Section */}
      <header className="py-12 bg-green-600 text-white rounded-b-3xl">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-2">Physiotherapy by Dr. Dibyendu</h1>
          <p className="text-xl sm:text-2xl font-light">Your path to recovery and well-being.</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 space-y-24">
        {/* Hero Section */}
        <section className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Feel Better, Move Freely</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Expert care and personalized treatment plans to help you regain strength and mobility.
          </p>
        </section>

        {/* Clinics Section */}
        <section className="space-y-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center">Our Clinics & Treatments</h2>
          {clinics.map((clinic, index) => (
            <ClinicCard key={index} clinic={clinic} />
          ))}
        </section>

        {/* Gallery Section */}
        <section className="space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center">Our Facilities</h2>
          <PhotoGallery photos={clinics[0].photos} />
        </section>

        {/* Reviews Section */}
        <section className="space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center">Patient Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 rounded-t-3xl text-center">
        <p className="text-sm">&copy; 2025 Made with no clue @Rigdu . All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

// The rest of the setup is done in index.jsx and vite.config.js, but all main content is here.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
