import React from 'react';
import { FaStar, FaUser, FaCalendarAlt, FaMapMarkerAlt, FaQuoteRight } from 'react-icons/fa';
import { authorData } from '../data/authorData';

const Testimonials = () => {
  const testimonial = authorData.testimonial;

  return (
    <section className="py-20 bg-primary/5">
      <div className="container-custom mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-title text-primary">Reader Love</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
            <p className="text-gray-600 mt-4">What readers are saying about Emma's book</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-accent">
            <FaQuoteRight className="text-accent/30 mb-4" size={48} />
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} size={20} className="text-yellow-500" />
                ))}
              </div>
              <span className="text-sm text-gray-400">|</span>
              <span className="text-sm font-semibold text-primary">{testimonial.title}</span>
            </div>

            <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
              "{testimonial.review}"
            </p>

            <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 pb-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <FaUser size={14} className="text-accent" />
                <span>{testimonial.username}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt size={14} className="text-accent" />
                <span>{testimonial.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarAlt size={14} className="text-accent" />
                <span>{testimonial.date}</span>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-500">
                Format: Paperback — Verified Purchase
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={16} className="text-yellow-500" />
                ))}
              </div>
              <span className="font-semibold text-primary">5.0 average rating</span>
              <span className="text-gray-500">from readers worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;