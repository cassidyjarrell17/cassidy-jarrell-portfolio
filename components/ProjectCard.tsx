import { useState } from 'react';
import Modal from './Modal';

// Define the types for the props
interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  modalContent: React.ReactNode; // Expecting a React component or JSX
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageSrc, modalContent }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="relative !min-w-[260px] !max-w-[300px] w-full h-[450px] p-6 bg-[#FEFAE0] rounded-xl shadow-md flex flex-col">
      {/* Project Card Content */}
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      {/* Modal Trigger Button */}
      <button
        onClick={handleOpenModal}
        className="absolute bottom-4 right-4 bg-[#B99470] text-white p-4 !rounded-full w-12 h-12 flex items-center justify-center shadow-md"
      >
        +
      </button>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="p-4">
          {/* Here we render the modalContent passed as a component */}
          {modalContent}
        </div>
      </Modal>
    </div>
  );
};

export default ProjectCard;
