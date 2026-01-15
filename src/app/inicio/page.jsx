"use client";

import React, { useState } from 'react';
import { Play, MapPin, Phone, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import WhyChooseUs from './WhyChooseUs';
function HomePage() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const partners = [
        { id: 1, logo: 'https://html.rometheme.net/pharmed/image/Logo-grey-1.png' },
        { id: 2, logo: 'https://html.rometheme.net/pharmed/image/Logo-grey-2.png' },
        { id: 3, logo: 'https://html.rometheme.net/pharmed/image/Logo-grey-3.png' },
        { id: 4, logo: 'https://html.rometheme.net/pharmed/image/Logo-grey-4.png' },
        { id: 5, logo: 'https://html.rometheme.net/pharmed/image/Logo-grey-5.png' },
    ];

    return (
        <main className="min-h-screen grid gap-8 md:gap-20 bg-background font-sans">
            {/* Sección Hero - CORREGIDO */}
            <section className="relative pt-0 overflow-hidden">
                {/* Imagen de fondo */}
                <div className="relative h-[70vh] md:h-[80vh] lg:h-[90vh]">
                    <img
                        src="https://html.rometheme.net/pharmed/image/img6.jpg"
                        alt="Hero background"
                        className="w-full h-full rounded-xl md:rounded-4xl object-cover object-top"
                    />
                    
                    {/* Overlay para transición */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
                </div>

                {/* Contenido superpuesto - CORREGIDO */}
                <div className="relative z-10 -mt-20 md:-mt-32 lg:-mt-40 px-4">
                    <div className=" mx-auto">
                        <div className="flex flex-col lg:flex-row gap-6">

                            {/* Columna izquierda - CORREGIDO */}
                            <div className="w-full lg:w-7/12">
                                <div className="bg-white shadow-lg md:shadow-2xl p-4 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl border border-gray-100 lg:-translate-x-8">
                                    <div className="flex flex-col gap-4 md:gap-6">

                                        {/* Encabezado */}
                                        <div className="flex items-center gap-3 justify-center lg:justify-start">
                                            <div className="w-10 h-10 md:w-12 md:h-12">
                                                <img
                                                    src="https://html.rometheme.net/pharmed/image/cuida_medicine-outline.png"
                                                    alt="Medicine icon"
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <h6 className="text-primary font-semibold text-base md:text-lg">
                                                Wellness Starts Here
                                            </h6>
                                        </div>

                                        {/* Título - CORREGIDO */}
                                        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-snug md:leading-tight text-center lg:text-left">
                                            Stay Healthy with Our Quality Medical Products
                                        </h1>

                                        {/* Carrusel de partners - MEJORADO */}
                                        <div className="mt-6 md:mt-8 px-2">
                                            <Swiper
                                                modules={[Autoplay, Pagination]}
                                                spaceBetween={10}
                                                slidesPerView={2}
                                                autoplay={{
                                                    delay: 3000,
                                                    disableOnInteraction: false,
                                                }}
                                                breakpoints={{
                                                    640: { slidesPerView: 3, spaceBetween: 15 },
                                                    768: { slidesPerView: 4, spaceBetween: 20 },
                                                    1024: { slidesPerView: 5, spaceBetween: 25 },
                                                }}
                                                className="w-full"
                                            >
                                                {partners.map((partner) => (
                                                    <SwiperSlide key={partner.id}>
                                                        <div className="flex items-center justify-center h-16 md:h-20">
                                                            <div className="w-28 h-12 md:w-32 md:h-16">
                                                                <img
                                                                    src={partner.logo}
                                                                    alt={`Partner ${partner.id}`}
                                                                    className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                                                />
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Columna derecha - CORREGIDO */}
                            <div className="w-full lg:w-5/12 mt-4 lg:mt-0">
                                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 md:gap-5 px-2">

                                    {/* Botón de video */}
                                    <button
                                        onClick={() => setIsVideoOpen(true)}
                                        className="relative group w-14 h-14 md:w-16 md:h-16"
                                        aria-label="Play video"
                                    >
                                        <div className="relative w-full h-full">
                                            <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-ping"></div>
                                            <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-pulse"></div>
                                            <div className="absolute inset-2 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                                <Play className="w-4 h-4 md:w-5 md:h-5 text-white ml-0.5" />
                                            </div>
                                        </div>
                                    </button>

                                    {/* Texto descriptivo - CORREGIDO */}
                                    <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed max-w-lg">
                                        Discover a wide range of high-quality medical products designed to support your health
                                        and well-being.
                                    </p>

                                    {/* Información de contacto - CORREGIDO */}
                                    <div className="flex flex-col items-center lg:items-start gap-3 md:gap-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                                            </div>
                                            <span className="text-gray-700 text-sm md:text-base">
                                                KLLG St, No.99, Pku City, ID 28289
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                                            </div>
                                            <span className="text-gray-700 text-sm md:text-base">
                                                0761-8523-398
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal del video (sin cambios) */}
            {isVideoOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
                    <div className="relative w-full max-w-4xl">
                        <button
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute -top-10 md:-top-12 right-0 text-white hover:text-primary transition-colors"
                            aria-label="Close video"
                        >
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/50 flex items-center justify-center">
                                <span className="text-xl md:text-2xl">×</span>
                            </div>
                        </button>
                        <div className="relative pt-[56.25%]">
                            <iframe
                                className="absolute inset-0 w-full h-full rounded-lg"
                                src="https://www.youtube.com/embed/FK2RaJ1EfA8?autoplay=1"
                                title="Medical Products Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Sección About Us - CORREGIDO */}
            <section className="section pt-0 px-4">
                <div className="container mx-auto">
                    {/* Encabezado */}
                    <div className="flex flex-col gap-3 items-center text-center max-w-2xl mx-auto">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 md:w-10 md:h-10">
                                <img
                                    src="https://html.rometheme.net/pharmed/image/cuida_medicine-outline.png"
                                    className="w-full h-full object-contain"
                                    alt="Medicine icon"
                                />
                            </div>
                            <h6 className="text-primary font-semibold text-sm md:text-base">
                                Who We Are
                            </h6>
                        </div>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 px-2">
                            Healthcare Solutions for a Healthier Tomorrow
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base px-4">
                            At our pharmacy, we are dedicated to providing top-notch healthcare solutions.
                        </p>
                    </div>

                    {/* Contenido en dos columnas - CORREGIDO */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">

                        {/* Columna izquierda */}
                        <div className="lg:col-span-1">
                            <div className="relative bg-cover flex flex-col justify-center bg-center p-4 md:p-6 rounded-2xl md:rounded-3xl overflow-hidden min-h-[350px] md:min-h-[400px]"
                                style={{
                                    backgroundImage: 'url(https://html.rometheme.net/pharmed/image/img14.jpg)',
                                }}>
                                
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-primary-900/50 via-primary-900/75 to-primary-900/95"></div>
                                
                                <div className="relative z-10 flex flex-col gap-4 md:gap-6 h-full">
                                    {/* Visión */}
                                    <div className="flex flex-col md:flex-row items-start gap-4">
                                        <div className="bg-primary/30 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0">
                                            <i className="fas fa-flask text-white text-lg md:text-xl"></i>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h4 className="text-white text-xl md:text-2xl font-bold">Our Vision</h4>
                                            <p className="text-white/90 text-sm md:text-base">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Misión */}
                                    <div className="flex flex-col md:flex-row items-start gap-4">
                                        <div className="bg-primary/30 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0">
                                            <i className="fas fa-pills text-white text-lg md:text-xl"></i>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h4 className="text-white text-xl md:text-2xl font-bold">Our Mission</h4>
                                            <p className="text-white/90 text-sm md:text-base">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            </p>
                                        </div>
                                    </div>

                                    <hr className="border-accent my-2 md:my-4" />

                                    {/* Información de contacto - CORREGIDO */}
                                    <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-4 text-white mt-auto">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0">
                                                <i className="fas fa-map-marker-alt text-white text-sm"></i>
                                            </div>
                                            <span className="font-medium text-xs md:text-sm">KLLG St, No.99, Pku City</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0">
                                                <i className="fas fa-phone text-white text-sm"></i>
                                            </div>
                                            <span className="font-medium text-xs md:text-sm">0761-8523-398</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Columna derecha - CORREGIDO */}
                        <div className="lg:col-span-1">
                            <div className="relative bg-cover rounded-2xl md:rounded-3xl overflow-hidden h-full min-h-[350px] md:min-h-[400px]"
                                style={{ backgroundImage: 'url(https://html.rometheme.net/pharmed/image/img18.jpg)' }}>
                                
                                {/* Reviews - CORREGIDO */}
                                <div className="absolute bottom-0 left-0 bg-primary p-2 md:p-3 rounded-tr-2xl md:rounded-tr-3xl">
                                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
                                        <div className="flex -space-x-2">
                                            {[1, 2, 3].map((i) => (
                                                <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white overflow-hidden">
                                                    <img
                                                        src={`https://html.rometheme.net/pharmed/image/image-600x600-2${i}.jpg`}
                                                        className="w-full h-full object-cover"
                                                        alt={`Customer ${i}`}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div className="flex gap-1">
                                                {[...Array(4)].map((_, i) => (
                                                    <i key={i} className="fas fa-star text-yellow-400 text-xs md:text-sm"></i>
                                                ))}
                                                <i className="fas fa-star text-primary-100 text-xs md:text-sm"></i>
                                            </div>
                                            <h6 className="text-white font-semibold text-xs md:text-sm">(1.5k+ Reviews)</h6>
                                        </div>
                                    </div>
                                </div>

                                {/* Botón - CORREGIDO */}
                                <div className="absolute bottom-0 right-0 m-3 md:m-4">
                                    <button className="bg-primary text-white rounded-full px-4 py-2 md:px-6 md:py-3 font-semibold hover:bg-primary-600 transition-colors duration-300 flex items-center gap-1 md:gap-2 shadow-lg text-sm md:text-base">
                                        <span>Read More</span>
                                        <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <WhyChooseUs/>
            </section>
        </main>
    );
}

export default HomePage;