import React from "react";

type ServiceCardProps = {
  title: string;
  description: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <div className=""><div className="bg-gradient-to-b from-sky-50   to-gray-300 rounded-lg shadow-md text-center p-5 transition-transform duration-300 hover:shadow-lg hover:scale-105">
      <h3 className="text-2xl font-semibold text-blue-500">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div></div>
    
  );
};

const Home: React.FC = () => {
  const services = [
    { title: "Consulting", description: "Our marketing strategies are designed to connect your brand with your target audience effectively. From creating engaging campaigns to utilizing data-driven insights, we ensure that your messaging resonates and drives meaningful results. Whether it’s digital marketing, social media management, or content creation, we help elevate your brand’s presence and foster growth." },
    { title: "Technology", description: "In today’s rapidly changing digital world, staying ahead is essential. Our technology services provide innovative solutions, including custom software development, IT management, and digital transformation strategies. We use the latest technologies to help your business thrive and stay competitive in the future." },
    { title: "Finance", description: "Sound financial management is essential for business success. At Minam Group, we offer tailored financial solutions, including planning, investment strategies, and risk management, to help you achieve sustainable growth and navigate the financial landscape with confidence." },
  ];

  return (
    <div className="grid gap-5 p-5 items-center  max-w-screen  md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <ServiceCard key={index} title={service.title} description={service.description} />
      ))}
    </div>
  );
};

export default Home;
