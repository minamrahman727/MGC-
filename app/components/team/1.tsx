import React from 'react';
import Image from 'next/image';

const TeamSection: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto  py-5 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl lg:text-5xl text-center">
          Meet <span className='text-blue-500'>Our Team</span> 
        </h2>
        <p className="mt-2 text-lg text-gray-600 text-center">
          Our team of experts
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="border border-gray-300 rounded-lg shadow-lg p-6 text-center hover:shadow-2xl hover:shadow-gray-300">
              <Image
                src={member.image}
                width={128}
                height={128}
                alt={member.name}
                className="mx-auto w-32 h-32 rounded-full object-cover hover:animate-spin"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
              <p className="mt-2 text-gray-500">
                <a href={`mailto:${member.email}`}>{member.email}</a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const teamMembers = [
  {
    id: 1,
    name: 'Syed Minam Ur Rehman',
    position: 'CEO',
    email: 'founder@mgckarachi.com',
    image: '/team/minam.jpg',
  },
  {
    id: 2,
    name: 'Syed Shafiq Ur Rehman',
    position: 'President & CFO',
    email: 'shafiqcfo@mgckarachi.com',
    image: '/team/mgc.png',
  },
  {
    id: 3,
    name: 'Kashmala Rehman',
    position: 'CMO',
    email: 'kashmalacmo@mgckarachi.com',
    image: '/team/mgc.png',
  },
  {
    id: 4,
    name: 'Munawar Dani',
    position: 'COO',
    email: 'munawarcoo@mgckarachi.com',
    image: '/team/mgc.png',
  },
  {
    id: 5,
    name: 'Rashid bhatti',
    position: 'CTO',
    email: 'RashidCTO@mgckarachi.com',
    image: '/team/mgc.png',
  },
  {
    id:6,
    name:'M. Azam Siddiqui',
    position:'Legal Advisor',
    email:'legal.azam@mgckarachi.com',
    image:'/team/mgc.png'
  }
];

export default TeamSection;
