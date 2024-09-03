import { AiOutlineFileText } from 'react-icons/ai';
import { FaHeart, FaShareAlt, FaRegComments } from 'react-icons/fa';

const exampleFeatures = [
  {
    title: 'Cadastro de Animais',
    description: 'Espaço para uma descrição detalhada do animal, incluindo características de personalidade e necessidades especiais.',
    icon: (
      <AiOutlineFileText className="h-6 w-6 text-[var(--color-text-features)]" />
    ),
  },
  {
    title: 'Sistema de Match',
    description: 'Algoritmo que combina as preferências do usuário com as características dos animais disponíveis.',
    icon: (
      <FaHeart className="h-6 w-6 text-[var(--color-text-features)]" />
    ),
  },
  {
    title: 'Engajamento Social',
    description: 'Usuários podem compartilhar perfis de animais e suas experiências nas redes sociais. ONGs podem solicitar doações.',
    icon: (
      <FaShareAlt className="h-6 w-6 text-[var(--color-text-features)]" />
    ),
  },
  {
    title: 'Chat e Comunicação',
    description: 'Sistema de chat ao vivo para responder perguntas rápidas e interagir com os adotantes em potencial.',
    icon: (
      <FaRegComments className="h-6 w-6 text-[var(--color-text-features)]" />
    ),
  },
];

export default exampleFeatures;
