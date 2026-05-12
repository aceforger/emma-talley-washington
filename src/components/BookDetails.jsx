import React from 'react';
import { FaBook, FaFish, FaBirthdayCake, FaStar, FaUtensils, FaHeart } from 'react-icons/fa';
import { GiMeat, GiChiliPepper } from 'react-icons/gi';
import { authorData } from '../data/authorData';

const BookDetails = () => {
  const book = authorData.book;
  const recipeTypes = book.details.includes;

  const getIcon = (type) => {
    const icons = {
      'Meat recipes': <GiMeat size={20} className="text-accent" />,
      'Fish recipes': <FaFish size={20} className="text-accent" />,
      'Soups': <FaUtensils size={20} className="text-accent" />,
      'Desserts': <FaBirthdayCake size={20} className="text-accent" />
    };
    return icons[type] || <FaBook size={20} className="text-accent" />;
  };

  return (
    <section id="book" className="py-20 bg-gradient-to-b from-primary/5 to-white">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title text-primary">The Book</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="section-subtitle">Discover the healing power of soul food</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 shadow-xl border border-primary/20">
              <img 
                src="/images/secret.jpg"
                alt={book.title}
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-accent text-white rounded-full p-3 shadow-lg">
                <FaUtensils size={24} />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-3">
              {book.fullTitle}
            </h3>
            <p className="text-accent font-medium mb-4">A Soul Food Healing Journey</p>
            
            <div className="prose text-gray-700 mb-6">
              <p className="leading-relaxed">{book.description}</p>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                <FaBook size={20} className="text-accent" />
                What's Inside:
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {recipeTypes.map((type, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-white rounded-lg p-3 shadow-sm border border-primary/10">
                    {getIcon(type)}
                    <span className="text-sm text-gray-700">{type}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 rounded-xl p-5 shadow-md mb-6 border-l-4 border-accent">
              <FaHeart className="text-accent mb-2" size={20} />
              <p className="text-gray-700 italic mb-3">
                "Inside is a collection of good recipes and a guide to your recovery from a change or a loss in your life. 
                Complete the assignments and bring your grieving to a close."
              </p>
              <p className="text-primary font-semibold">— Emma Talley Washington</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-accent hover:bg-accent-light text-white px-8 py-3 rounded-full font-semibold flex-1 text-center transition-all duration-300 transform hover:-translate-y-0.5">
                Buy Now on Amazon
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-semibold flex-1 text-center transition-all duration-300">
                Preview Sample
              </button>
            </div>

            <p className="text-sm text-gray-500 text-center mt-4">
              Available in Paperback & eBook
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;