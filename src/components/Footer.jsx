import React from 'react';
import { FaHeart, FaEnvelope, FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn, FaUtensils } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white/80 py-12">
      <div className="container-custom mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <FaUtensils className="text-accent" size={20} />
              <h3 className="text-xl font-display font-bold text-white">{authorData.name}</h3>
            </div>
            <p className="text-sm text-white/70">Author | Healer | Soul Food Enthusiast</p>
          </div>
          
          <div className="flex gap-8 text-sm">
            <a href="#home" className="hover:text-accent transition-colors">Home</a>
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#book" className="hover:text-accent transition-colors">Book</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>
          
          <div className="flex gap-5">
            <a href="#" className="hover:text-accent transition-colors"><FaTwitter size={18} /></a>
            <a href="#" className="hover:text-accent transition-colors"><FaInstagram size={18} /></a>
            <a href="#" className="hover:text-accent transition-colors"><FaFacebookF size={18} /></a>
            <a href="#" className="hover:text-accent transition-colors"><FaLinkedinIn size={18} /></a>
            <a href={`mailto:${authorData.email}`} className="hover:text-accent transition-colors"><FaEnvelope size={18} /></a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-white/40">
          <p>© 2025 {authorData.name}. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center gap-1">
            Healing souls through food and faith <FaHeart size={10} className="text-accent" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;