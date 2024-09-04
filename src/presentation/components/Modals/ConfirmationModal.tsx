import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white p-4 rounded-lg max-w-xs w-full text-center">
        <FaCheckCircle size={24} className="text-green-500 mx-auto mb-2" />
        <p className="text-sm text-gray-700">{message}</p>
        <button 
          onClick={onClose} 
          className="mt-4 px-4 py-2  bg-[var(--color-primary-dark)]  text-white text-sm rounded-lg hover:bg-[var(--color-primary-light)]  transition-colors w-full"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
