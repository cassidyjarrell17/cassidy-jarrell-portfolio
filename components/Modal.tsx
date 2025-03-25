import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      {/* Modal container with responsive width and height */}
      <div className="relative bg-white p-6 rounded-xl shadow-lg w-[95vw] md:w-[80vw] lg:w-[70vw] h-[90vh] max-w-5xl overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl"
        >
          ✖
        </button>

        {/* Modal Content */}
        <div className="text-lg">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
