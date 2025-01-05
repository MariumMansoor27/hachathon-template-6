import Image from 'next/image';
import React from 'react'

const ranges = [
  { title: 'Dining', image: '/pictures/dining.png', alt: 'Dining Room' },
    { title: 'Living', image: '/pictures/living.png', alt: 'Living Room' },
    { title: 'Bedroom', image: '/pictures/bedroom.png', alt: 'Bedroom' },
];
const Range = () => {
  return (
    <div className='w-[1183px] h-[685px]  ml-[131px] flex justify-around'>
        <section className="text-center p-8">
      <h2 className="text-2xl font-bold mb-2">Browse The Range</h2>
      <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="flex flex-wrap justify-center gap-6">
        {ranges.map((range) => (
          <div
            key={range.title}
            className="bg-white shadow-md rounded-md overflow-hidden max-w-xs hover:scale-105 transition-transform"
          >
            <Image
              src={range.image}
              alt={range.alt}
              width={381}
              height={480}
              
            />
            <h3 className="text-lg font-medium my-2">{range.title}</h3>
          </div>
        ))}
      </div>
    </section>
  
  
  </div>
  )
}

export default Range


