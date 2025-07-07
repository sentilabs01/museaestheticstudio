import React from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xl mx-auto p-8 flex flex-col" style={{ minHeight: '500px', maxHeight: '90vh' }}>
        <button
          className="absolute top-4 right-4 text-2xl font-bold text-gray-400 hover:text-gray-700 focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-6 text-center text-[#182D20]" style={{ fontFamily: 'TT Drugs, Inter, sans-serif', fontWeight: 800 }}>
          Book Now
        </h2>
        <iframe
          src="https://www.vagaro.com/museaestheticstudio/book-now"
          title="Book Now"
          className="w-full flex-1 rounded-xl border-0"
          style={{ minHeight: '400px', maxHeight: '60vh' }}
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default BookingModal; 