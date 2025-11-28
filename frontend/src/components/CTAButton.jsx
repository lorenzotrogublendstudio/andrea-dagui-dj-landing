import React from 'react';

const CTAButton = ({ text = "Preventivo Gratis", className = "", variant = "primary" }) => {
  
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Stili base
  const baseStyles = "px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer inline-block text-center uppercase tracking-wide";
  
  // Varianti di colore
  const variants = {
    primary: "bg-[#d02894] hover:bg-[#b02080] text-white shadow-[#d02894]/30",
    outline: "border-2 border-[#d02894] text-[#d02894] hover:bg-[#d02894] hover:text-white",
    white: "bg-white text-[#d02894] hover:bg-gray-100 shadow-black/10"
  };

  return (
    <button 
      onClick={scrollToForm} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {text}
    </button>
  );
};

export default CTAButton;