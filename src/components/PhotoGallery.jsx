import React from 'react';

// Reusable component for displaying a photo gallery.
const PhotoGallery = () => (
    <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-10">Our Clinic & Treatments</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-4">
                    <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <img className="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/800x600/?physiotherapy" alt=""/>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <img className="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/800x600/?elderly-care" alt=""/>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <img className="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/800x600/?clinic" alt=""/>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <img className="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/800x600/?rehabilitation" alt=""/>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <img className="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/800x600/?doctor" alt=""/>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <img className="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/800x600/?exercise" alt=""/>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <img className="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/800x600/?medical" alt=""/>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <img className="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/800x600/?health" alt=""/>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <img className="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/800x600/?wellness" alt=""/>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <img className="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/800x600/?patient" alt=""/>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <img className="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/800x600/?injury" alt=""/>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <img className="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/800x600/?stretch" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default PhotoGallery;

