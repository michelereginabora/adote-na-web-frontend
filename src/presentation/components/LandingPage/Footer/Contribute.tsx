import React, { useState } from 'react';
import { FaHeart, FaTimes, FaCopy } from 'react-icons/fa';
import ConfirmationModal from '../../Modals/ConfirmationModal';

const Contribute: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [textToCopy] = useState('53.338.404/0001-56');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy);
    setIsConfirmationOpen(true); // Abre o modal de confirmação
  };

  const closeConfirmation = () => {
    setIsConfirmationOpen(false);
  };

  return (
    <div className="flex flex-col flex-1 shrink self-start basis-0 min-w-[240px] max-md:max-w-full">
      <div className="flex flex-col w-full font-medium max-md:max-w-full">
        <h2 className="text-2xl font-bold leading-loose text-[var(--color-primary-light)] max-md:max-w-full">
          Invista no Projeto
        </h2>
        <p className="mt-2 text-sm text-[var(--color-text-light)] max-md:max-w-full">
          Nosso projeto é open source e depende da ajuda da comunidade para cobrir os custos essenciais de manutenção e desenvolvimento.
        </p>
      </div>
      <div className="flex mt-6 w-full max-md:max-w-full">
        <button 
          onClick={openModal}
          className="flex items-center gap-2 self-stretch px-4 py-3 text-white bg-[var(--color-primary-light)] rounded-lg whitespace-nowrap hover:bg-[var(--color-primary-dark)] transition-colors"
        >
          Ajudar
          <FaHeart />
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white p-4 rounded-lg max-w-xs w-full">
            <button 
              onClick={closeModal} 
              className="absolute top-1 right-1 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <FaTimes size={16} />
            </button>
            <img 
              src="https://images2.imgbox.com/0c/a9/ELs1fniC_o.jpg" 
              alt="QR Code Pix 53.338.404/0001-56"
              className="max-w-full h-auto rounded-lg mb-2"
            />
            <div className="mt-2">
              <input 
                type="text" 
                value={textToCopy} 
                readOnly 
                className="w-full p-2 border rounded-lg text-gray-700 text-sm"
              />
              <button 
                onClick={copyToClipboard} 
                className="mt-2 flex items-center justify-center px-3 py-2 bg-[var(--color-primary-dark)] text-white text-sm rounded-lg hover:bg-[var(--color-primary-light)]  transition-colors w-full"
              >
                Copiar chave pix
                <FaCopy className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      )}
      <ConfirmationModal 
        isOpen={isConfirmationOpen} 
        onClose={closeConfirmation} 
        message="Chave copiada! Obrigada pela sua colaboração!"
      />
    </div>
  );
};

export default Contribute;
