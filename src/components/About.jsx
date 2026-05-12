import React from 'react';
import { FaHeart, FaUtensils, FaLeaf, FaStar, FaQuoteLeft, FaUserFriends, FaCar, FaHome } from 'react-icons/fa';
import { GiChefToque, GiSpellBook } from 'react-icons/gi';
import { authorData } from '../data/authorData';

const About = () => {
  const roles = authorData.authorBio.roles;
  const passions = authorData.authorBio.passions;

  const roleIcons = {
    'Mother': <FaHeart />,
    'Grandmother': <FaStar />,
    'Wife': <FaHeart />,
    'Friend': <FaUserFriends />,
    'Gardener': <FaLeaf />,
    'Uber Driver': <FaCar />
  };

  return (
    <section id="about" className="py-20 bg-light">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title text-primary">About Emma Talley Washington</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="section-subtitle">
            A passionate voice for healing, grief recovery, and the transformative power of soul food
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-8 border-accent">
              <FaQuoteLeft className="text-accent mb-4" size={32} />
              <p className="text-gray-700 leading-relaxed whitespace-pre-line italic">
                {authorData.authorBio.fullBio.split('\n\n')[0]}
              </p>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/20">
              <h3 className="text-xl font-display font-bold text-primary mb-4 flex items-center gap-2">
                <FaHeart className="text-accent" size={24} />
                Her Philosophy on Healing
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {authorData.authorBio.fullBio.split('\n\n')[1]}
              </p>
              <div className="mt-4 p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
                <p className="font-semibold text-primary">Her Secret Formula:</p>
                <p className="text-gray-700 text-lg">✨ SPIRITUALITY + FOOD = HEALING ✨</p>
                <p className="text-sm text-gray-500 mt-2">"Eat, pray and get fat and your grief will go away" — Emma</p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border-t-4 border-accent">
              <h3 className="text-xl font-display font-bold text-primary mb-4 flex items-center gap-2">
                <GiChefToque size={24} className="text-accent" />
                About Her Work
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {authorData.authorBio.fullBio.split('\n\n')[2]}
              </p>
              <div className="bg-red-50 border-l-4 border-accent p-4 mt-4">
                <p className="text-sm font-semibold text-accent">⚠️ WARNING</p>
                <p className="text-sm text-gray-600">I believe in God and the healing power of the Holy Spirit.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-primary/5 rounded-xl p-4 text-center border border-primary/20">
                <FaHeart className="text-accent mx-auto mb-2" size={24} />
                <h4 className="font-semibold text-primary">Roles</h4>
                <div className="flex flex-wrap gap-1 justify-center mt-2">
                  {roles.map((role, idx) => (
                    <span key={idx} className="text-xs bg-white px-2 py-1 rounded-full text-gray-600 flex items-center gap-1">
                      {roleIcons[role] && <span className="text-accent text-xs">{roleIcons[role]}</span>}
                      {role}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-primary/5 rounded-xl p-4 text-center border border-primary/20">
                <FaLeaf className="text-accent mx-auto mb-2" size={24} />
                <h4 className="font-semibold text-primary">Passions</h4>
                <div className="flex flex-wrap gap-1 justify-center mt-2">
                  {passions.map((passion, idx) => (
                    <span key={idx} className="text-xs bg-white px-2 py-1 rounded-full text-gray-600">{passion}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <FaHome size={24} className="text-accent" />
                <h3 className="text-xl font-display font-bold">A Personal Note</h3>
              </div>
              <p className="text-white/90 leading-relaxed">
                "I'm a mother, grandmother, wife, friend to many, gardener, Uber driver. 
                I love all bright colors, natural healing remedies, and I cook in a red kitchen that I painted myself."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;