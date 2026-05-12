import React from 'react';
import { FaArrowRight, FaChevronRight, FaHeart, FaUtensils } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gold/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm mb-6">
              <FaHeart className="text-accent" size={16} />
              <span>Healing Through Food & Faith</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {authorData.name}
              <span className="block text-gold text-2xl md:text-3xl mt-2">Author & Healer</span>
            </h1>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Discover the secret to healing grief through {authorData.book.subtitle.toLowerCase()}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#book" className="bg-accent hover:bg-accent-light text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 group transition-all duration-300 transform hover:-translate-y-0.5">
                Explore the Book
                <FaArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-white hover:text-primary transition-all duration-300">
                Meet the Author
                <FaChevronRight size={18} />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gold max-w-md mx-auto">
              <img 
                src="/images/emma.webp"
                alt="Emma Talley Washington"
                className="w-full max-w-sm md:max-w-md h-auto object-cover"
                style={{ maxHeight: '500px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-white rounded-lg shadow-xl p-4">
              <div className="flex items-center gap-2">
                <FaUtensils size={20} />
                <span className="font-semibold">Soul Food Healing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;