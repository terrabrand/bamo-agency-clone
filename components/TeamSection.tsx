import React from 'react';
import { FadeIn } from './FadeIn';
import { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Anne Wilkinson',
    role: 'Principal',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Michael Booth',
    role: 'Principal',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Sergio Mercado',
    role: 'Principal',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Addy Williams',
    role: 'Principal, Managing Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Ashley Venturini',
    role: 'Principal, Business Development',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Gerry Jue',
    role: 'Principal',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 7,
    name: 'Pamela Babey',
    role: 'Principal Emeritus',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 8,
    name: 'Martin Oestlund',
    role: 'Associate Principal',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
  },
];

export const TeamSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {teamMembers.map((member, index) => (
            <FadeIn key={member.id} delay={index * 0.1} className="group">
              <div className="aspect-[3/4] overflow-hidden mb-4 bg-gray-200">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
              </div>
              <h4 className="text-lg font-serif text-brand-dark">{member.name}</h4>
              <p className="text-xs text-gray-500 uppercase tracking-wide mt-1">{member.role}</p>
            </FadeIn>
          ))}
        </div>
        
        <div className="mt-20 text-center">
            <FadeIn>
                <h3 className="text-3xl md:text-4xl font-serif text-brand-accent mb-4">Meet the Team</h3>
            </FadeIn>
        </div>
      </div>
    </section>
  );
};