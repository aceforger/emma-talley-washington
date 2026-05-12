import React, { useState } from 'react';
import { FaEnvelope, FaPaperPlane, FaHeart, FaUtensils } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Newsletter signup:', email);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-primary-dark to-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom mx-auto text-center relative z-10">
        <div className="flex justify-center mb-4">
          <div className="bg-accent p-4 rounded-full">
            <FaUtensils size={32} className="text-white" />
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
          Join the Healing Journey
        </h2>
        <p className="text-lg text-white/90 mb-4 max-w-2xl mx-auto">
          Subscribe to receive updates, exclusive recipes, and healing insights from Emma.
        </p>
        <p className="text-sm text-white/70 mb-8 flex items-center justify-center gap-2">
          <FaEnvelope />
          {authorData.email}
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-6 py-3 rounded-full text-dark outline-none focus:ring-2 focus:ring-accent bg-white"
            required
          />
          <button type="submit" className="bg-accent hover:bg-accent-light text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5">
            <FaPaperPlane size={18} />
            Subscribe
          </button>
        </form>

        {submitted && (
          <p className="text-green-300 mt-4 animate-pulse">
            Thank you for subscribing! 🌟 Your healing journey begins.
          </p>
        )}

        <div className="flex items-center justify-center gap-2 mt-6 text-white/50 text-sm">
          <FaHeart size={12} className="text-accent" />
          <span>No spam ever. Unsubscribe anytime.</span>
          <FaHeart size={12} className="text-accent" />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;