import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: '🚗',
      title: 'Engine Repair',
      description: 'Professional engine repair services with expert technicians and quality parts.'
    },
    {
      id: 2,
      icon: '🔧',
      title: 'Brake Service',
      description: 'Complete brake inspection and repair for your safety on the road.'
    },
    {
      id: 3,
      icon: '⚡',
      title: 'Battery Replacement',
      description: 'Quick and reliable battery replacement services with warranty.'
    },
    {
      id: 4,
      icon: '🛞',
      title: 'Tire Service',
      description: 'Tire rotation, balancing, and replacement for optimal performance.'
    },
    {
      id: 5,
      icon: '🛢',
      title: 'Oil Change',
      description: 'Regular oil change services to keep your engine running smoothly.'
    },
    {
      id: 6,
      icon: '🔍',
      title: 'Car Inspection',
      description: 'Comprehensive vehicle inspection to identify potential issues.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of car repair and maintenance services to keep your vehicle in perfect condition.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Service Icon */}
              <div className="text-5xl mb-4 text-center">
                {service.icon}
              </div>
              
              {/* Service Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {service.title}
              </h3>
              
              {/* Service Description */}
              <p className="text-gray-600 text-center leading-relaxed">
                {service.description}
              </p>
              
              {/* Read More Button */}
              <div className="text-center mt-6">
                <button className="text-orange-500 hover:text-orange-600 font-semibold transition-colors duration-300">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;